import { ChangeDetectorRef, Directive, HostBinding, Input } from "@angular/core"
import { generateClassPrefix, generateIdPrefix } from "./functions";
import { ReplaySubject, Subject, takeUntil, tap } from "rxjs"


function NotifyOnChange(): PropertyDecorator {
  return function(target: any, propertyKey: string | symbol) {
    const privateKey = `_${String(propertyKey)}`;
    Object.defineProperty(target, privateKey, {
      writable: true,
      enumerable: true,
      configurable: true,
    });

    Object.defineProperty(target, propertyKey, {
      get: function () {
        return this[privateKey];
      },
      set: function (newValue) {
        const oldValue = this[privateKey];
        this[privateKey] = newValue;
        if (oldValue !== newValue ) {
          this.listenForSetStateSub?.unsubscribe();
          this.listenForSetStateSub = this.listenForSetState()?.subscribe();
        }
      },
      enumerable: true,
      configurable: true,
    });
  };
}

type Constructor<T = {}> = new (...args: any[]) => T;


// be very careful modifying this function as it can make typescript very angry
// TODO turn to a decorator or whatever you can for typescript to see the types coming from the  base class
export function WMLComponentBaseZeroPropsMixin<TBase extends Constructor>(
  Base: TBase = class {} as TBase
) {
  // @ts-ignore
  return class   extends Base   {
    setStateSubj = new Subject<InstanceType<TBase>>();
    setState = (val)=>this.setStateSubj.next(val)
    setStateEvent = new ReplaySubject<InstanceType<TBase>>(1);
    constructor(props:Partial<TBase>= new Base()) {
      super( );
      // @ts-ignore
      let origProps = Object.entries(props)
      .filter(([key, val]) => !key.startsWith('prop') );
      Object.assign(this, Object.fromEntries(origProps));
    }
  } as Constructor<TBase>;
}

export class WMLComponentBaseZeroProps extends WMLComponentBaseZeroPropsMixin(){}

/**
 * @ meant to be a base or abstract class use directily if you know what you are doing
*/
@Directive()
// TODO A
export class WMLComponentBaseZero<T extends WMLComponentBaseZeroProps = WMLComponentBaseZeroProps > {
  // TODO A
  @Input("props") @NotifyOnChange() props?: T | any;

  ngUnsub = new Subject<any>();
  cdref?: ChangeDetectorRef;
  classPrefix!: Function;
  idPrefix!: Function;
  @HostBinding('class') myClass!: string;
  @HostBinding('attr.id') myId?: string;

  constructor(props?: Partial<{ classPrefix: string; idPrefix: string }>) {
    if (props?.classPrefix !== undefined) {
      this.classPrefix = generateClassPrefix(props.classPrefix);
      this.myClass = this.classPrefix(`View`);
    }
    if (props?.idPrefix !== undefined) {
      this.idPrefix = generateIdPrefix(props.idPrefix);
      this.myId = this.idPrefix();
    }
  }

  listenForSetState = () => {
    // @ts-ignore
    return this.props?.setStateSubj.pipe(
      takeUntil(this.ngUnsub),
      tap((res) => {
        // @ts-ignore
        Object.assign(this.props, res);
        this.cdref?.detectChanges();
        this.props.setStateEvent.next(this.props)
      })
    );
  };

  ngOnDestroy() {
    // @ts-ignore
    this.ngUnsub.next();

    this.ngUnsub.complete();
  }
}

