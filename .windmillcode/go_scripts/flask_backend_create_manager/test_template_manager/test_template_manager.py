from managers.template_manager.template_manager import TemplateManager
import pytest
from unit_tests.test_utils.common_utils import ImportStrings
from utils.exceptions.singleton_exception import SingletonException


class TestImportStrings(ImportStrings):
  def template_manager(self,x=""):
    return "managers.template_manager.template_manager"+self.append_submodule(x)

  def template_manager_class(self,x=""):
    return self.template_manager()+".TemplateManager"+self.append_submodule(x)

import_strings = TestImportStrings()


def set_mocks(monkeypatch):
  TemplateManager.init = False

def create_class_props():
  return {}


def test_init(mocker,monkeypatch):
  def test_default_behaviour():

    set_mocks(monkeypatch)
    # arrange
    props = create_class_props()

    # act
    manager = TemplateManager(**props)

    # assert
    assert manager.init == True

  def test_singleton():
    set_mocks(monkeypatch)
    # arrange
    props = create_class_props()

    # act
    manager = TemplateManager(**props)
    with pytest.raises(SingletonException):
      manager = TemplateManager(**props)

  test_default_behaviour()
  test_singleton()
