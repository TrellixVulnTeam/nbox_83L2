from .utils import Subway
from ..utils import nbox_session

import logging
logger = logging.getLogger()
web_server_subway = Subway("https://nimblebox.ai", nbox_session)

################################################################################
# Jobs CLI
# ========
# This has functions for the CLI of NBX-Jobs
################################################################################

def new_job(project_name):
  logger.info("-" * 69)
  import os, re
  from datetime import datetime
  created_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

  out = re.findall("^[a-zA-Z_]+$", project_name)
  if not out:
    raise ValueError("Project name can only contain letters and underscore")

  if os.path.exists(project_name):
    raise ValueError(f"Project {project_name} already exists")
  
  logger.info(f"Creating a folder: {project_name}")
  os.mkdir(project_name)
  os.chdir(project_name)

  logger.info("Creating: exe.py")
  with open("exe.py", "w") as f:
    code_ = f'''
#!/usr/bin/env python3
# auto generated by 'nbox jobs init' command
# project_name: {project_name}
# created_time: {created_time}

from nbox import Operator
from nbox.utils import folder

def get_op() -> Operator:
  # since initialising your operator might require passing a bunch of arguments
  # you can use this function to get the operator by manually defining things here

  return None

def deploy():
  # get operator and deploy it
  op: Operator = get_op()
  op.deploy(
    job_id = "if job_id is None, new job will be created",
    init_folder = folder(__file__) # no need to change this
  )

def run():
  # run your operator
  op: Operator = get_op()
  op(
    # if your operator is scheduled, avoid passing anything here
    # if your operator is run one time, pass the input here
  )
'''

    code_ += '''
if __name__ == "__main__":
  from fire import Fire
  Fire({"deploy": deploy, "run": run})

# end of auto generated code'''
    f.write(code_.strip())

  with open("README.md", "w") as f:
    f.write(f'''
# '{project_name}' NBX-Jobs

This is an autogenerated README file for [NBX-Jobs](www.nimblebox.ai/jobs) which was:
* created at: {created_time}
* name: {project_name}

Steps to complete:

1. Add all your code module here in this folder
2. Add in requirements.txt file if needed
3. Fill The Three functions (`get_operator`, `deploy`, `run`) in exe.py
4. Run `nbox jobs deploy <folder_path> or `nbox jobs deploy -h` for more help

Rule of Thumb:

1. If you are scheduling, your `op` forward should not takes arguments, otherwise
you are executing the same process over and over, which is not what you want.
If you still want to do so, try moving as much as possible to `__init__`.
2. If you are running this one-time, then you should define arguments in `run` function.

    '''.strip() + "\n")

  open("requirements.txt", "w").close() # ~ touch requirements.txt

  logger.info("Completed")
  logger.info("-" * 69)

def deploy(folder: str = "./"):
  """Deploy a job on NimbleBox.ai's NBX-Jobs. This convinience function will
  just run ``./exe.py deploy``

  Args:
    folder (str, optional): Folder to deploy. Defaults to "./".
  """

  import os
  import sys
  import subprocess
  
  if not os.path.exists(folder) or not os.path.isdir(folder):
    raise ValueError(f"Incorrect project at path: '{folder}'! nbox jobs init <name>")
  if os.path.isdir(folder):
    os.chdir(folder)
    if not os.path.exists("./exe.py"):
      raise ValueError(f"Incorrect project at path: '{folder}'! nbox jobs init <name>")
  else:
    raise ValueError(f"Incorrect project at path: '{folder}'! nbox jobs init <name>")

  sys.path.append(folder)
  os.chdir(folder)
  subprocess.call(["./exe.py", "deploy"])

