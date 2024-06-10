from utils.exceptions.singleton_exception import SingletonException
from utils.local_deps import  local_deps
local_deps()


class TemplateManager():
  init= False
  def __init__(self):
    if(TemplateManager.init):
      raise SingletonException
    else:
      TemplateManager.init = True






