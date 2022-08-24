Search.setIndex({docnames:["index","jobsdeploy.faq","jobsdeploy.job","jobsdeploy.serving","modules","nbox","nbox.auth","nbox.cli","nbox.framework","nbox.framework.on_functions","nbox.framework.on_operators","nbox.hyperloop","nbox.init","nbox.instance","nbox.jobs","nbox.lib","nbox.lib.arch","nbox.lib.aws","nbox.lib.comms","nbox.lib.demo","nbox.lib.dist","nbox.lib.nbx_instances","nbox.lib.notebook","nbox.lib.shell","nbox.messages","nbox.network","nbox.operator","nbox.relics","nbox.relics.base","nbox.relics.local","nbox.relics.nbx","nbox.sub_utils","nbox.sub_utils.ssh","nbox.subway","nbox.utils","quick.0","reading.concepts"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","jobsdeploy.faq.rst","jobsdeploy.job.rst","jobsdeploy.serving.rst","modules.rst","nbox.rst","nbox.auth.rst","nbox.cli.rst","nbox.framework.rst","nbox.framework.on_functions.rst","nbox.framework.on_operators.rst","nbox.hyperloop.rst","nbox.init.rst","nbox.instance.rst","nbox.jobs.rst","nbox.lib.rst","nbox.lib.arch.rst","nbox.lib.aws.rst","nbox.lib.comms.rst","nbox.lib.demo.rst","nbox.lib.dist.rst","nbox.lib.nbx_instances.rst","nbox.lib.notebook.rst","nbox.lib.shell.rst","nbox.messages.rst","nbox.network.rst","nbox.operator.rst","nbox.relics.rst","nbox.relics.base.rst","nbox.relics.local.rst","nbox.relics.nbx.rst","nbox.sub_utils.rst","nbox.sub_utils.ssh.rst","nbox.subway.rst","nbox.utils.rst","quick.0.rst","reading.concepts.rst"],objects:{"":[[5,0,0,"-","nbox"]],"nbox.auth":[[6,1,1,"","AWSClient"],[6,1,1,"","AzureClient"],[6,1,1,"","DOClient"],[6,1,1,"","GCPClient"],[6,1,1,"","NBXClient"],[6,1,1,"","OCIClient"],[6,3,1,"","init_secret"]],"nbox.auth.AWSClient":[[6,2,1,"","get_client"]],"nbox.auth.AzureClient":[[6,2,1,"","get_client"]],"nbox.auth.DOClient":[[6,2,1,"","get_client"]],"nbox.auth.GCPClient":[[6,2,1,"","get_client"]],"nbox.auth.NBXClient":[[6,2,1,"","get"],[6,2,1,"","put"]],"nbox.auth.OCIClient":[[6,2,1,"","get_client"]],"nbox.cli":[[7,3,1,"","get"],[7,3,1,"","login"],[7,3,1,"","main"],[7,3,1,"","open_home"],[7,3,1,"","version"]],"nbox.framework":[[9,0,0,"-","on_functions"],[10,0,0,"-","on_operators"]],"nbox.framework.on_functions":[[9,1,1,"","NboxStrings"],[9,3,1,"","async_def_func_or_class"],[9,3,1,"","code_node"],[9,3,1,"","def_func_or_class"],[9,3,1,"","get_code_portion"],[9,3,1,"","get_name"],[9,3,1,"","get_nbx_flow"],[9,3,1,"","node_assign_or_expr"],[9,3,1,"","node_for_expr"],[9,3,1,"","node_if_expr"],[9,3,1,"","node_return"],[9,3,1,"","parse_args"],[9,3,1,"","parse_kwargs"],[9,3,1,"","write_program"]],"nbox.framework.on_functions.NboxStrings":[[9,4,1,"","OP_TO_STRING"],[9,2,1,"","define"],[9,2,1,"","for_loop"],[9,2,1,"","function"],[9,2,1,"","return_statement"]],"nbox.framework.on_operators":[[10,1,1,"","AirflowMixin"],[10,1,1,"","PrefectMixin"]],"nbox.framework.on_operators.AirflowMixin":[[10,2,1,"","from_airflow_dag"],[10,2,1,"","from_airflow_operator"],[10,2,1,"","to_airflow_dag"],[10,2,1,"","to_airflow_operator"]],"nbox.framework.on_operators.PrefectMixin":[[10,2,1,"","from_prefect_flow"],[10,2,1,"","from_prefect_task"],[10,2,1,"","to_prefect_flow"],[10,2,1,"","to_prefect_task"]],"nbox.init":[[12,3,1,"","create_webserver_subway"],[12,3,1,"","get_stub"]],"nbox.instance":[[13,1,1,"","Instance"],[13,3,1,"","print_status"]],"nbox.instance.Instance":[[13,2,1,"","delete"],[13,2,1,"","is_running"],[13,2,1,"","ls"],[13,2,1,"","mv"],[13,2,1,"","new"],[13,2,1,"","refresh"],[13,2,1,"","remote"],[13,2,1,"","rm"],[13,2,1,"","start"],[13,2,1,"","status"],[13,2,1,"","stop"],[13,4,1,"","useful_keys"]],"nbox.jobs":[[14,1,1,"","Job"],[14,1,1,"","Schedule"],[14,1,1,"","Serve"],[14,3,1,"","get_job_list"],[14,3,1,"","new"],[14,3,1,"","print_serving_list"],[14,3,1,"","serving_forward"],[14,3,1,"","upload_job_folder"]],"nbox.jobs.Job":[[14,2,1,"","change_schedule"],[14,2,1,"","delete"],[14,2,1,"","display_runs"],[14,5,1,"","exists"],[14,2,1,"","get_runs"],[14,2,1,"","logs"],[14,2,1,"","new"],[14,2,1,"","pause"],[14,2,1,"","refresh"],[14,2,1,"","resume"],[14,2,1,"","status"],[14,2,1,"","trigger"],[14,2,1,"","upload"]],"nbox.jobs.Schedule":[[14,5,1,"","cron"],[14,2,1,"","get_dict"],[14,2,1,"","get_message"]],"nbox.jobs.Serve":[[14,2,1,"","forward"],[14,2,1,"","new"],[14,2,1,"","status"],[14,2,1,"","upload"]],"nbox.lib":[[16,0,0,"-","arch"],[17,0,0,"-","aws"],[18,0,0,"-","comms"],[19,0,0,"-","demo"],[20,0,0,"-","dist"],[21,0,0,"-","nbx_instances"],[22,0,0,"-","notebook"],[23,0,0,"-","shell"]],"nbox.lib.arch":[[16,1,1,"","Sequential"],[16,1,1,"","StepOp"]],"nbox.lib.arch.Sequential":[[16,2,1,"","forward"]],"nbox.lib.arch.StepOp":[[16,2,1,"","add_step"],[16,2,1,"","forward"]],"nbox.lib.aws":[[17,1,1,"","S3Operator"]],"nbox.lib.aws.S3Operator":[[17,2,1,"","forward"]],"nbox.lib.comms":[[18,1,1,"","Notify"]],"nbox.lib.comms.Notify":[[18,2,1,"","forward"]],"nbox.lib.demo":[[19,1,1,"","Intro"],[19,1,1,"","Magic"],[19,1,1,"","MagicServing"],[19,1,1,"","ThingsShellCanDo"]],"nbox.lib.demo.Intro":[[19,2,1,"","forward"]],"nbox.lib.demo.Magic":[[19,2,1,"","forward"]],"nbox.lib.demo.MagicServing":[[19,2,1,"","forward"]],"nbox.lib.demo.ThingsShellCanDo":[[19,2,1,"","forward"]],"nbox.lib.dist":[[20,1,1,"","AgentOpRootStub"],[20,1,1,"","RootRunner"]],"nbox.lib.dist.AgentOpRootStub":[[20,2,1,"","forward"],[20,2,1,"","get_keys"]],"nbox.lib.dist.RootRunner":[[20,2,1,"","clear_relic"],[20,2,1,"","forward"],[20,2,1,"","prepare_children"],[20,2,1,"","start_status"]],"nbox.lib.nbx_instances":[[21,1,1,"","FilesToInstance"]],"nbox.lib.nbx_instances.FilesToInstance":[[21,2,1,"","forward"]],"nbox.lib.notebook":[[22,1,1,"","ImportNodeVisitor"],[22,1,1,"","NotebookRunner"],[22,3,1,"","get_package_version"],[22,3,1,"","get_py_builtin_all"],[22,3,1,"","process_codeblocks"],[22,3,1,"","update_requirements"]],"nbox.lib.notebook.ImportNodeVisitor":[[22,2,1,"","visit_Import"],[22,2,1,"","visit_ImportFrom"]],"nbox.lib.notebook.NotebookRunner":[[22,2,1,"","forward"]],"nbox.lib.shell":[[23,1,1,"","GitClone"],[23,1,1,"","NBToScript"],[23,1,1,"","Python"],[23,1,1,"","PythonScript"],[23,1,1,"","ShellCommand"]],"nbox.lib.shell.GitClone":[[23,2,1,"","forward"]],"nbox.lib.shell.NBToScript":[[23,2,1,"","forward"]],"nbox.lib.shell.Python":[[23,2,1,"","forward"]],"nbox.lib.shell.PythonScript":[[23,2,1,"","forward"]],"nbox.lib.shell.ShellCommand":[[23,2,1,"","forward"]],"nbox.messages":[[24,3,1,"","check_oneof"],[24,3,1,"","dict_to_message"],[24,3,1,"","field_mask"],[24,3,1,"","from_any_pb"],[24,3,1,"","get"],[24,3,1,"","get_current_timestamp"],[24,3,1,"","get_messages"],[24,3,1,"","message_to_dict"],[24,3,1,"","message_to_json"],[24,3,1,"","read_file_to_binary"],[24,3,1,"","read_file_to_string"],[24,3,1,"","rpc"],[24,3,1,"","set"],[24,3,1,"","setdefault"],[24,3,1,"","streaming_rpc"],[24,3,1,"","write_binary_to_file"],[24,3,1,"","write_string_to_file"]],"nbox.network":[[25,3,1,"","deploy_job"],[25,3,1,"","deploy_serving"],[25,3,1,"","zip_to_nbox_folder"]],"nbox.operator":[[26,1,1,"","Machine"],[26,4,1,"","Operator"],[26,3,1,"","operator"]],"nbox.operator.Machine":[[26,2,1,"","add_child"]],"nbox.relics":[[28,0,0,"-","base"],[29,0,0,"-","local"],[30,0,0,"-","nbx"]],"nbox.relics.base":[[28,1,1,"","BaseStore"]],"nbox.relics.base.BaseStore":[[28,2,1,"","delete"],[28,2,1,"","download_from"],[28,2,1,"","get"],[28,2,1,"","get_object"],[28,2,1,"","has"],[28,2,1,"","list_files"],[28,2,1,"","put"],[28,2,1,"","put_object"],[28,2,1,"","rm"],[28,2,1,"","upload_to"]],"nbox.relics.local":[[29,1,1,"","RelicLocal"]],"nbox.relics.local.RelicLocal":[[29,2,1,"","delete"],[29,2,1,"","get"],[29,2,1,"","get_id"],[29,2,1,"","get_object"],[29,2,1,"","has"],[29,2,1,"","list_files"],[29,2,1,"","put"],[29,2,1,"","put_object"],[29,2,1,"","rm"]],"nbox.relics.nbx":[[30,1,1,"","RelicsNBX"],[30,3,1,"","get_relic_file"],[30,3,1,"","print_relics"]],"nbox.relics.nbx.RelicsNBX":[[30,2,1,"","delete"],[30,2,1,"","get"],[30,2,1,"","get_object"],[30,2,1,"","has"],[30,2,1,"","list_files"],[30,2,1,"","list_relics"],[30,2,1,"","put"],[30,2,1,"","put_object"],[30,2,1,"","rm"],[30,2,1,"","start_fs"]],"nbox.sub_utils":[[32,0,0,"-","ssh"]],"nbox.sub_utils.ssh":[[32,1,1,"","ConnectionManager"],[32,1,1,"","RSockClient"],[32,3,1,"","port_in_use"],[32,3,1,"","tunnel"]],"nbox.sub_utils.ssh.ConnectionManager":[[32,2,1,"","add"],[32,2,1,"","quit"],[32,2,1,"","start"]],"nbox.sub_utils.ssh.RSockClient":[[32,2,1,"","authenticate"],[32,2,1,"","connect"],[32,2,1,"","connect_to_rsock_server"],[32,2,1,"","io_copy"],[32,2,1,"","log"],[32,2,1,"","set_config"],[32,2,1,"","stop"]],"nbox.subway":[[33,1,1,"","SpecSubway"],[33,1,1,"","Sub30"],[33,1,1,"","Subway"],[33,3,1,"","filter_templates"]],"nbox.subway.SpecSubway":[[33,2,1,"","from_openapi"]],"nbox.subway.Sub30":[[33,2,1,"","u"]],"nbox.utils":[[34,1,1,"","DBase"],[34,1,1,"","FileLogger"],[34,1,1,"","PoolBranch"],[34,3,1,"","convert_to_list"],[34,3,1,"","deprecation_warning"],[34,1,1,"","env"],[34,3,1,"","fetch"],[34,3,1,"","folder"],[34,3,1,"","from_pickle"],[34,3,1,"","get_files_in_folder"],[34,3,1,"","get_image"],[34,3,1,"","get_logger"],[34,3,1,"","get_random_name"],[34,3,1,"","hash_"],[34,3,1,"","isthere"],[34,3,1,"","join"],[34,3,1,"","load_module_from_path"],[34,3,1,"","log_traceback"],[34,3,1,"","to_pickle"]],"nbox.utils.DBase":[[34,2,1,"","get"],[34,2,1,"","get_dict"]],"nbox.utils.FileLogger":[[34,2,1,"","log"]],"nbox.utils.env":[[34,2,1,"","NBOX_HOME_DIR"],[34,2,1,"","NBOX_JOB_FOLDER"],[34,2,1,"","NBOX_JSON_LOG"],[34,2,1,"","NBOX_LOG_LEVEL"],[34,2,1,"","NBOX_NO_AUTH"],[34,2,1,"","NBOX_NO_LOAD_GRPC"],[34,2,1,"","NBOX_NO_LOAD_WS"],[34,2,1,"","NBOX_SSH_NO_HOST_CHECKING"],[34,2,1,"","NBOX_USER_TOKEN"]],nbox:[[6,0,0,"-","auth"],[7,0,0,"-","cli"],[8,0,0,"-","framework"],[12,0,0,"-","init"],[13,0,0,"-","instance"],[14,0,0,"-","jobs"],[15,0,0,"-","lib"],[24,0,0,"-","messages"],[25,0,0,"-","network"],[26,0,0,"-","operator"],[27,0,0,"-","relics"],[31,0,0,"-","sub_utils"],[33,0,0,"-","subway"],[34,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:property"},terms:{"0":[0,13,14,24,33,34],"1":[0,13,14,26,34],"10":[14,34],"1459d663d14b7b7ad82ebe5c98c8a0397b21d4e2b9f4711562746a5cb48f86c4":29,"1647858175":0,"2":[10,13,14,26,34],"20":14,"2001":32,"25":13,"2892":0,"3":[14,16,34],"4":[13,14,34],"50":34,"6":13,"6174":13,"69":14,"7":14,"8":[13,14],"8000":[0,7,32],"8002":32,"8888":32,"9":16,"99mhf3h":0,"\u0924":34,"\u0938\u0938":34,"abstract":[19,23,26,28],"break":[26,34],"byte":29,"case":[0,2,3,6,29],"catch":[3,22,33],"char":14,"class":[2,3,5,6,9,10,13,14,16,17,18,19,20,21,22,23,24,26,27,29,30,32,33,34],"default":[1,6,9,13,14,24,34],"do":[1,2,3,8,22,24,33],"export":8,"final":2,"float":33,"function":[0,1,2,3,9,12,13,15,16,22,23,24,25,26,30,33,34],"import":[1,2,3,8,12,19,22,23,24,34],"int":[13,14,25,26,32,34],"new":[2,13,14,20],"null":0,"public":9,"return":[2,3,9,12,13,24,25,26,34],"static":[8,9,13,14,26,30],"super":[1,26,34],"true":[3,9,13,14,24,26,32,33,34],"try":[9,33],"while":33,A:[12,24,32,33],At:33,But:[25,26],By:34,FOR:9,For:[0,1,6,7,9,32],If:[0,2,8,12,13,14,24,25,26,34],In:[0,2,3,20],It:[1,12,26,34],No:13,On:10,One:20,Or:[0,34],That:[2,3,8],The:[0,2,3,8,10,14,20,24,29,32,33,34],Then:8,There:[1,34],These:[8,13,26,33],To:[0,3],Will:7,With:[2,13,20],_:[9,34],__call__:0,__file__:34,__init__:[2,3,16,19,23,26],__main__:34,__name__:34,_api:33,_default_kei:33,_description_:6,_instal:16,_io:14,_name:34,_object:29,_pb2:8,_session:33,_spec:33,_specsubway__nam:33,_ssh:[13,32],_start:13,_unittest:[20,25],_url:33,a65b3ae34a2d:20,abl:10,about:[33,34,36],abov:2,abs_path:34,acces:12,access:[0,7],accord:8,accur:34,across:[1,6,8,34],act:[1,26],action:2,activ:[14,29],actual:13,ad:[0,7,26,31,33],adapt:8,add:[0,2,3,16,32],add_child:26,add_fifti:34,add_on:34,add_step:16,add_ten:34,add_zero:34,after:12,again:0,against:24,agentoprootstub:20,agre:13,ai:[0,6,19,23,25,34],aim:15,airflow:8,airflowmixin:10,alia:[0,7,26],all:[0,2,4,6,7,8,9,12,13,14,15,17,18,19,20,21,24,26,29,30,34,36],all_fn:34,allow:[12,33],almost:24,along:[0,1,20,27],alreadi:[0,13],also:[6,13],alwai:[0,24,33],am:[2,33],an:[0,1,3,6,7,9,12,19,22,23,24,26,29,33,34],analysi:26,analyt:20,ani:[0,1,2,3,6,7,9,12,13,19,21,22,23,24,33,34],annot:3,anoth:34,any_pb2:24,any_pb:24,anyth:[14,34],anywher:20,aout:0,apart:10,api:[1,3,7,12,13,14,19,23,24,27,33,34,35],api_cor:24,api_end:7,app:[6,34],appli:34,appropri:24,apps_to_port:32,ar:[0,1,2,6,8,10,12,13,14,16,17,18,19,21,22,24,25,26,31,33,34,36],arbitrari:[19,23],arch:16,architectur:[5,15],arg:[10,20,21,23,34],argument:[3,8,9,24,34],around:[10,12,20],artifact:12,asia:13,ask:2,assign:9,ast:[9,22],asyn:9,async_def_func_or_class:9,atleast:34,attempt:10,attr:33,auth:[6,32],auth_token:32,authent:[0,4,5,7,32],auto:[0,8],auto_backup:0,auto_shutdown:13,auto_shutdown_tim:0,autogen:8,autoshutdown:[0,13],avail:13,avoid:[13,33],aw:[1,5,6,15,27],awai:26,awar:36,awsclient:6,azur:[6,27],azure_config_kwarg:6,azurecli:6,b64:9,b:26,back:1,backend:25,bad:10,bar:33,base:[5,6,9,10,13,14,16,17,18,19,20,21,22,23,26,27,29,30,32,33,34],basestor:[28,29,30],bashrc:[0,7],basic:15,batch:[2,3,19,23,35],beawar:3,becam:8,becaus:[24,26,33,34],becom:33,behavior:24,behind:[0,5,31],being:[1,10,13],below:[2,3],best:10,better:[3,10,26],between:[0,24,25,32],beyond:27,bin:[23,29],binari:12,bite:34,blank:13,blindli:33,blob:[6,24,27],block:[0,19,22,23,34],bool:[2,3,6,13,14,20,24,25,29,30,32,34],both:[13,14,24],boto_config_kwarg:6,bottleneck:3,brain:34,branch:[23,34],breakdown:0,bring:6,broken:10,bruce:0,bucket:[17,27],bug:0,build:[0,4,5,7,10,12,15,32],buildport:32,built:[0,1,6,11,13,31,33],buket:1,buld:[19,23],bunch:1,byoc:6,cach:[29,34],cache_dir:[25,29],call:[0,2,3,6,8,13,16,22,24,26,32,33,34],callabl:[9,24],can:[0,1,2,3,6,7,8,12,13,14,15,16,19,20,23,26,27,33,34],cancel:14,cannot:3,capabl:20,capture_output:16,cell:22,certain:34,certainli:26,chain:2,chang:[1,13,14],change_schedul:14,cheap:34,check:[13,34],check_oneof:24,children:34,chmod:16,cl:9,classmethod:[10,13,33],clear_rel:20,cli:[4,5,14,35],click:1,client:[6,32],client_socket:32,clone:23,clone_access:0,closet:8,cloud:[1,6,13],cloud_fil:13,cluster:20,code:[0,1,2,3,6,8,9,10,14,19,20,22,23,25,26,30,33,34],code_lin:9,code_nod:9,codebas:34,col_offset:9,com:[20,22,24],combin:[0,13,26,33],come:[1,13,26],comm:[5,15],command:[0,2,3,4,5,7,12,22,23],commun:[11,18],compar:24,compil:8,complet:[0,3,13],complex:[8,33],complic:[12,34],compon:15,comput:[1,13,20,33],concurr:34,condit:[9,34],config:32,confus:[2,3,12],connect:[6,13,20,27,32],connect_to_rsock_serv:32,connection_id:32,connectionmanag:32,consist:[15,24],contain:[0,2,3,6,8,9,14,20,23,24,29,31,33],contibu:0,continu:3,contract:1,control:0,convert:[19,23,24,33],convert_to_list:34,convieni:[24,34],convini:[0,7,14,16],cool:[8,34],core:[24,34],correctli:33,could:24,count:13,coupl:[2,34],cpu:13,creat:[0,6,7,8,12,14,16,19,22,23,24,29,30,32],create_webserver_subwai:12,created_at:14,created_on:14,created_tim:0,creator:0,cron:14,cs_endpoint:13,csv2:0,curiou:25,current:[7,14,20,22,24,34],custom:[0,13],dag:[9,10,19,23,25,26],dag_pb2:[9,25],dai:[12,14,20,33],dashboard:2,data:[0,2,3,13,19,23,29,32,33],dataclass:8,datetim:14,daunt:0,dbase:34,debug:34,decod:33,decor:34,dedicated_hw:[0,13],deeper:0,def:[2,3,16,19,23,26,34],def_func_or_class:9,defin:[2,3,9,16,19,21,23,24,26,34],definit:[8,9],delet:[13,14,28,29,30],demo:[2,3,5,15],depend:[2,12],deploi:[0,2,14,19,23,25,26],deploy:[0,3,14],deploy_job:25,deploy_serv:25,deployment_id_or_nam:25,deprecation_warn:34,depth:10,design:[12,24],detail:[12,33],determin:26,dev:[0,32],develop:[22,33],dict:[24,33],dict_to_messag:24,dictionari:24,didn:12,differ:[0,8,10,16,24,33,34],digit:6,dir:24,direct:32,directli:[0,8],directori:[6,13],disallow:33,discord:18,discov:24,disk:34,display_run:14,dist:[5,15],distinguish:24,distribut:[1,20],doclient:6,document:[2,3,4,5,8,26,34],doe:33,don:[0,12,16,34],done:2,dot:[12,25,33],download:[2,17,34],download_binari:[19,23],download_from:28,dr:1,ds:3,dst:13,duct:10,dynam:34,e:24,each:[2,10,33],easi:[1,26,33],easier:33,east1:13,echo:7,editor:0,effect:0,effort:2,eg:33,either:[19,23],els:[2,3,14,25],elsewher:6,empti:24,emptibl:13,encod:14,end:[10,14,33],end_col_offset:9,end_lineno:9,endpoint:[3,13,19,23,33],engin:[3,4,5,31],enjoi:0,ensur:34,entir:[6,19,23,29],entri:[24,29],env:34,environ:34,equival:24,err_msg:24,error:34,etc:[1,2,8,13,27,34],even:3,eventu:10,ever:1,everi:14,everydai:14,everyth:[0,23],ex:6,exact:3,exactli:26,exampl:[0,1,32],except:29,execut:[12,13,14,19,23,26],execution_index:9,exist:[0,12,14],expand:[0,9,26],expect:1,experiment:6,explicitli:[26,33],expr:9,express:9,ext:34,extend:33,extens:34,extract:9,extrem:12,f:[14,16],fals:[0,1,2,3,6,13,16,20,25,26,29,30,32,34],falsi:24,familiar:26,faq:[2,3,35],fastapi:33,faster:34,fdedc958b417adf63278938efa53c3b381f576446aede80bbc8f2c05320fcb4b:29,feb:14,feel:12,fetch:[0,33,34],field:[13,24],field_mask:24,field_mask_pb2:24,fieldmask:24,file:[0,1,2,6,8,10,12,13,14,17,21,22,23,24,25,27,29,30,34],file_logg:32,file_path:34,filelogg:34,filepath:[1,29,34],filestoinst:21,filesystem:29,filter_templ:33,find:[0,2,3,12,24,25],fire:[0,7],first:[0,3,12,14],flowchart:9,flush:[14,34],fn:34,fn_name:34,folder:[0,2,6,8,13,14,21,25,34],folder_nam:[14,21],follow:[2,7],for_loop:9,forc:[13,34],forget:33,form:8,format:[8,16],forward:[2,3,9,14,16,17,18,19,20,21,22,23,26],found:[0,24],fpath:[23,30],framework:[0,5,8],free:[19,23],fri:14,fridai:14,friendli:0,fro:13,from:[0,1,2,3,8,9,13,14,15,17,19,20,22,23,24,30,34],from_airflow_dag:10,from_airflow_oper:10,from_any_pb:24,from_openapi:33,from_pickl:34,from_prefect_flow:10,from_prefect_task:10,from_serv:0,full:[0,19,23,31],func:23,fundament:[2,3,26],futur:[8,34],g:24,gatewai:25,gcp:[1,6,13,27],gcp_config_kwarg:6,gcpclient:6,gener:[0,6,8,9,24,34],get:[1,3,6,7,9,13,14,19,23,24,26,28,29,30,33,34],get_client:6,get_code_port:9,get_current_timestamp:24,get_dict:[14,34],get_files_in_fold:34,get_id:29,get_imag:34,get_job_list:14,get_kei:20,get_logg:34,get_messag:[14,24],get_nam:9,get_nbx_flow:[9,26],get_object:[28,29,30],get_op:[2,3],get_package_vers:22,get_py_builtin_al:22,get_random_nam:34,get_relic_fil:30,get_resourc:1,get_run:14,get_schedul:1,get_stub:12,git:23,gitclon:23,github:[0,6,8,24],give:34,given:[2,6,9,24],global:12,go:[0,2,19,20],good:[0,34,35],googl:24,googleapi:24,gpu:13,gpu_count:13,grammar:9,great:13,grpc:[0,11,12,14,24,25],ha:[8,14,23,28,29,30,32,33,34],hack:10,haiku:8,handl:[32,34],happen:[19,23],hard:[1,15,34],hash:[19,23,34],hash_:34,have:[0,1,2,3,6,8,9,13,22,24,33,34],headach:12,hello:[3,26],help:[34,35],here:[0,1,2,3,4,8,9,13,15,16,17,18,19,20,23,24,26,31],hi:0,hidden:8,hide:8,high:26,highli:19,hmmm:20,home:[6,13],hope:0,hopefulli:10,host:34,hour:14,how:[0,1,2,3,19,26,34],howev:[3,29],http:[6,19,20,23,24,33],hurt:35,hyperloop:[4,5,9,12],i:[0,1,2,7,13,21,32,33],id:[2,3,13,14,21,25],id_or_nam:[2,3,14],idea:33,ifexp:9,implement:[8,13,20],importerror:34,importfrom:22,importnodevisitor:22,in_thi:13,incorrect:[14,33],increas:0,individu:13,ineffici:10,info:[32,34],inform:[0,6,20,29,33],infrastructur:[6,25],ing:[2,33],init:[4,5,16],init_fold:[14,25],init_secret:6,initi:[10,32],initialis:[2,3,12,19,23],inject:23,input:[3,9,19,23,34],insid:2,instal:[0,34],install_python:16,installpython:16,instanc:[0,4,5,6,21,24,27,32,34],instance_nam:13,instance_port:32,instead:24,instruct:[2,3],intent:[26,33],intention:8,interact:[2,23,34,36],interest:[6,8],interfac:33,intern:[9,11,29,31,33],interpret:[24,34],intro:19,invalid:3,io_copi:32,ipynb:[1,22],is_run:13,issu:[0,6],isther:34,item:[6,12,29,31,34],iter:[9,21],jan:14,jinja:34,jinja_kwarg:25,job:[0,4,5,19,20,23,25,26,33,34],job_id_or_nam:25,job_pb2:[14,20,25,26],jobflow:8,jobproto:[8,14],join:34,jq:0,json:[0,3,6,12,24,33,34],jupyt:[1,22,32],just:[0,2,3,10,22,26,33],k80:13,k8:34,k:34,keep:[0,1,9,19,23],kei:[7,17,24,29,30,34],kept:0,keyerror:24,keyword:24,kind:33,know:[0,13],kubelet:20,kwarg:[6,7,9,10,14,18,20,23,24,34],last_call_at:33,latch:0,latest:13,learn:19,led:10,lesson:10,let:[0,3,26],level:[32,34],lib:[0,1,2,3,4,5,16,22],librari:[8,15,19,23],like:[1,2,3,7,8,10,12,13,20,26,29,33],limit:[10,14],line:[0,2,9],lineno:9,link:4,linux:6,list:[0,9,13,14,16,21,24,29,30,32],list_fil:[28,29,30],list_rel:30,listen:32,liter:3,load:[0,12,13,24,33,34],load_module_from_path:34,local:[5,20,27,32,34],local_fil:13,local_fold:13,local_path:[17,28,30],localhost:32,localport:32,log:[0,2,3,14,29,32,34],log_traceback:34,logger:34,logic:[8,26],login:7,look:33,lookout:9,loop:[9,32],lot:1,ls:[0,13],m:[0,7,13],machin:[1,13,26],made:[1,10],magic:[2,3,12,19],magicserv:[2,3,19],mai:24,main:[7,8,20,24,32],major:3,make:[0,2,3,14,33],manag:[6,8,13,20,25,26,33],mani:25,manner:0,manual:[0,14],map:[24,29],mask:24,master:[20,34],max_work:34,maximum:7,mayb:20,md5:34,mdg_or_dict:24,me:[1,34],mean:[7,26,29,34],meant:[7,33],mechan:1,medium:20,mess:34,messag:[8,18,24,32,34],message_to_dict:24,message_to_json:24,messi:8,method:[6,9,13,14,24,26],might:[3,12,13,25,29,34],million:22,mind:25,minimum:0,minut:14,ml:[0,3,8],mlop:0,mod_vers:22,mode:[14,17,34],model:[3,8],modelspec:8,modifi:[1,24,34],modul:[0,4,5,8,15,24,26,34],month:14,moonshot:[2,3],moonshot_api:3,more:[0,6,8,13,24,33,34],most:[0,1],move:[0,9,13],ms_team:18,msg:34,msg_or_dict:24,multipl:[1,6,23,25,34],multiprocess:34,must:[0,34],mv:[0,13],my:[2,10,33],my_binari:[19,23],myoper:[19,23,26],myotheroper:26,n:[0,7,14],nalia:7,name:[3,6,7,9,13,14,21,22,24,25,34],namespac:34,natur:14,nb:22,nbox:[1,2,3,8,10,12,13,14,16,22,26,28,29,30,32,33,34],nbox_grpc_stub:12,nbox_home_dir:34,nbox_job_fold:34,nbox_json_log:34,nbox_log_level:34,nbox_no_auth:34,nbox_no_load_grpc:34,nbox_no_load_w:34,nbox_sess:33,nbox_ssh_no_host_check:[13,34],nbox_user_token:34,nbox_ws_pb2_grpc:12,nbox_ws_v1:[13,33],nboxignor:2,nboxstr:9,nbtoscript:23,nbx:[0,1,4,5,6,7,8,9,12,19,20,23,25,26,30,32,34],nbx_instanc:[5,15],nbx_intern:[19,23],nbx_url:6,nbx_user:[1,2,3],nbxclient:6,need:[0,2,3,13,29,34,36],nest:[26,34],network:[4,5,12,33],never:35,new_schedul:14,nimblebox:[0,2,3,4,5,6,9,20,21,25,27,33,34],nimeblebox:11,nn:26,node:[9,20,22,26],node_assign_or_expr:9,node_for_expr:9,node_if_expr:9,node_proto:9,node_return:9,nodevisitor:22,non:12,none:[2,3,6,12,13,14,16,18,21,23,24,25,28,29,33,34],notat:[12,33],note:[1,7,14,24],notebook:[1,5,15],notebook_path:23,notebookrunn:[1,22],noth:[2,33],notif:18,notifi:18,notsecur:32,now:[1,3,9,14],number:[21,34],obj:34,object:[0,1,3,6,9,10,12,13,14,16,21,24,25,26,27,28,29,30,32,33,34],object_storag:6,ocean:6,oci_config_kwarg:6,ocicli:6,off:0,old:14,on_:8,on_funct:[5,8],on_ml:[8,10],on_oper:[8,10],onc:[25,26],one:[3,8,13,24,25],ones:24,onli:[2,8,13,14,25,26,29,34],op:[1,16,20,22,26],op_nam:20,op_to_str:9,open:[0,1,2,3,7],open_hom:7,openapi:[12,33],oper:[0,1,2,3,4,5,8,15,16,17,18,19,20,21,23],optimis:26,option:[9,12,13,14,18,21,25,29,33,34],oracl:6,order:[0,3,19,23,26],organis:[19,23,30],origin:24,os:[33,34],other:[2,12,13,26,34],otherwis:13,our:[1,2,3,7,9,15,25],out:[22,25,34],outfil:22,output:[9,16],overwritten:24,own:[6,19,26],p100:13,pack:25,packag:[0,4,6,10,16,33,34],page:14,pair:[9,34],panel:1,parallel:34,param:24,paramet:[6,7,9,13,14,21,22,24,25,32,33,34],paramount:0,parent_op:26,pars:8,parse_arg:9,parse_kwarg:9,parser:9,part:[6,29,33],particularli:24,pass:[2,14,19,23,33,34],password:[0,32],path:[0,1,13,22,23,29,30,33,34],paus:14,pb_type:24,perform:[2,3,20],permiss:26,persist:[6,27],person:[13,14,21,25],piec:[1,9],pip:0,pipelin:[0,16],pipi:0,place:13,platform:[1,7,19,23],pleas:[6,22],plublish:12,pod:[1,20],pool:34,poolbranch:34,popul:2,port:[13,32],port_in_us:32,posit:[1,26],possibl:[7,24,26],post:33,potenti:12,power:[12,13],pre:13,prebuilt:[19,23],prefect:8,prefectmixin:10,prefer:2,prefix:[13,29,33],prematur:10,prepare_children:20,present:[14,24],prevent:23,print:[13,34],print_rel:30,print_serving_list:14,print_statu:13,process:[2,3,6,19,20,23,34,35],process_codeblock:22,processpoolexecutor:34,produc:12,product:[2,3],profil:0,program:[9,33,34],progress:6,project:[0,3,12,13],project_id:13,project_nam:[2,13],project_typ:13,prompt:0,properti:14,proto:[8,30],protobuf:[0,8,11,24,25,34],protobuf_help:24,provid:[0,6,13,14,15,19,27,31,32],push:[0,4,5],put:[2,6,25,28,29,30],put_object:[28,29,30],pwd:32,py:[1,2,3,8,10,22,24,25,34],py_fil:23,py_object:[28,30],pyi:8,python3:[0,7,13,23],python:[0,7,8,9,12,13,14,16,20,22,23,24,26,29,30,33,34],python_path:23,pythonscript:23,pytorch:[2,3,8,26],queri:1,question:[1,2,24],quick:[13,26,35],quickstart:0,quirky:25,quit:32,r:33,rais:[0,6,24,34],raise_for_request:33,raise_on_error:24,random:34,raylet:20,re:[7,20,26,34],reach:25,read:[0,2,3,8,9,10],read_file_to_binari:24,read_file_to_str:24,readi:6,realli:[3,10,26,33],reason:1,recap:26,reciev:29,recommend:[7,19,24],reconsid:12,recurs:2,reduc:2,refactor:26,refresh:[13,14],regard:1,region:13,rel:[13,34],relat:[17,18],relav:0,releas:1,relev:[14,19,23,33],relic:[0,1,4,5,20],relic_nam:[29,30],relic_typ:20,relicfil:30,relicloc:[20,29],relics_pb2:30,relicsnbx:[20,30],remot:[0,13,20],remote_path:28,remov:[7,13,29,34],render:9,replac:22,replace_bi:34,repositori:[8,23],represent:9,req_path:22,request:[12,33,34],requir:[1,2,8,13,20],research:25,reset:0,resourc:[1,20,25,26],respons:[12,13,22],rest:[0,12,22],result:1,resum:14,retriev:24,return_stat:9,reutrn:9,revers:32,right:0,rl:33,rm:[13,28,29,30],roadblock:12,root:20,rootrunn:20,rpc:[0,4,5,33],rsockclient:32,rsockserv:32,run:[0,1,2,3,13,14,19,20,22,23,24,25],runtim:[19,23],s3:[1,6,17,27],s3oper:17,s:[1,2,3,4,6,9,13,24,26,33],s_no:14,sai:0,said:22,same:[3,7,24,26,34],sampl:22,save:34,scale:10,scatter:34,schedul:[1,14,25],scope:[9,26],scratch:[0,15],screw:26,script:[0,1,16],sdk:[0,3,4],secret:[0,6,7,34],section:9,secur:32,see:[0,1,3],seedl:34,self:[2,3,16,19,23,26],send:32,sent:24,separ:10,seper:31,sequenti:16,seri:12,serialis:[3,33],serv:[1,2,3,14],server:[13,32,33],server_temp:34,servic:[0,6,25,26],service_nam:6,serving_forward:14,session:[7,12,33],set:[0,12,13,14,21,24,32,34],set_config:32,setdefault:24,setup:13,sever:[13,26],sh:16,sharabl:[19,23],share:8,shelex:[22,23],shell:[0,5,13,15,19,22],shellcommand:[16,23],shit:34,should:[0,13],silenc:0,simlpi:14,simpl:[6,7,26,30,33],simpler:26,sinc:[3,29],singl:[1,6,14,34],singular:[2,3],site:33,size:13,size_us:13,slack_connect:18,so:[1,2,3,15,22,26,34],socket:32,soft:34,softwar:12,some:[8,10,16,26,34],someom:19,sometask:2,someth:[0,7,34],sometim:26,sort:14,sourc:[0,2,6,7,8,9,10,12,13,14,16,17,18,19,20,21,22,23,24,25,26,28,29,30,32,33,34],south:13,spec:[0,12,33],specif:26,specifi:[24,25],specsubwai:33,spin:20,spiritu:26,split:22,spot:13,spun:26,src:13,ssh:[4,5,13,31,34],ssl:32,stackoverflow:34,start:[1,7,8,13,14,32],start_f:30,start_statu:20,state:13,statement:9,staticmethod:14,statist:14,statu:[0,13,14],stdout:14,step:[12,16,25,33],stepop:16,still:6,sting:34,stop:[0,13,32],storag:[6,27],storage_limit:13,store:[1,6,20,24,27,29],str:[3,6,7,12,13,14,16,17,18,19,20,21,22,23,24,25,26,28,29,30,32,33,34],strategi:34,stream:[0,14,24],streaming_rpc:24,strength:19,string:[9,14,33,34],structur:[2,29],stub:[8,12,20,24],sub30:[12,33],sub_util:32,subclass:24,subdomain:32,submodul:[0,4],subpackag:4,subprocess:[22,34],subsystem:[4,5,26],subwai:[0,4,5,12],support:[0,1,4,5,10,22,27,31],system:[3,7,11,12,13,20,26,30,31,33],t5:13,t:[0,12,16,34],tail:0,take:[1,9],takl:6,tape:10,target:[9,24],task:[0,12],technolog:1,tell:24,tempdir:[25,34],tensorflow:[8,22],termin:[0,2,32],test:[20,34],textiowrapp:14,than:[24,26,34],thei:[1,6,12],them:[0,2,6,9,22,26,33],themselv:24,thi:[0,1,2,6,7,8,9,10,12,13,14,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34],thing:[2,3,8,13,20,26,33,34,36],thingsshellcando:19,think:[20,33],though:[0,10,26],thread:34,three:[14,33],through:[2,19,34],throughout:[0,34],till:[2,3,9],time:[0,14],timedelta:14,timeless:9,timezon:14,tl:1,tmp:34,to_airflow_dag:10,to_airflow_oper:10,to_pickl:34,to_prefect_flow:10,to_prefect_task:10,togeath:26,togeth:34,token:[14,32,34],tool:12,top:11,torch:26,train_model:[19,23],trainer_v12_2:1,traingpt:[19,23],transfer:[1,13,21,32],transpar:12,treat:[24,26],tree:26,triger:14,trigger:[0,2,14],truli:34,truth:2,tunnel:[0,7,32],tupl:32,turn:0,tutori:[3,35],two:[0,2,24,26],txt:2,type:[12,13,24,25,33],typeerror:24,typic:12,typo:33,u:33,ubuntu:13,ugli:33,uncom:[0,2],underli:[0,1,7,13,24,26,33],understand:[0,4,5,10,26],union:[20,25],unless:3,unpack:22,unset:24,unsur:2,up:[0,12,20,26],updat:[13,15,29],update_requir:22,upgrad:[1,15],upload:[1,2,3,14,17,25],upload_job_fold:14,upload_to:28,url:[23,33,34],us:[1,2,3,6,7,8,12,13,14,16,19,21,23,25,26,32,33,34,35],usag:[0,1,5,14,19,23,26,31,33,34],useful_kei:13,user:[0,1,6,8,22,26,32,34],usernam:[0,30],usr:23,utc:14,utf:14,util:[4,5],uuid4:34,uuid:34,v100:13,v1:[7,12],v3:33,v:34,valid:3,valu:[6,9,14,20,24,29,32],valueerror:24,variabl:34,verbos:20,veri:19,version:[7,12,16],vidhya:20,visibl:[19,23],visit_import:22,visit_importfrom:22,w:14,wa:[10,33],wai:[3,10,26,32,33,34],wait_for_deploy:25,want:[0,2,3,12,13,19,23,25,26,32,34],warn:[14,34],wayn:0,we:[0,1,3,6,7,9,10,15,22,26,34],web:33,webserv:[12,13,33],week:14,weight:[8,26],well:[6,24,26],wget:[19,23],what:[1,33,36],when:[0,1,2,3,6,12,13,19,33,34,36],where:[1,13,25,33],whether:[32,34],which:[2,7,8,12,13,19,20,23,26,29,30,33],whose:9,why:[8,22],wide:[19,20,22,23],wip:[1,19,23],wire:34,wish:12,without:16,work:[0,1,6,12,25,34],worker:34,workload:[1,20],workspac:[0,2,3,13,14,21,25],workspace_id:[0,2,3,13,14,21,25,29,30,32],world:22,would:2,wrap:26,wrapper:[12,14,26,30],write:[0,1,8,14,16,26,34],write_binary_to_fil:24,write_program:9,write_string_to_fil:24,written:9,ws:33,wsjobservicestub:12,x:[13,16,19,26,34],y:26,year:14,yet:6,you:[0,1,2,3,6,7,8,12,13,19,20,23,25,26,33,34,36],your:[0,1,2,3,6,7,12,13,19,23,27,29,30,32,34],yourself:[12,25],zero:[0,13],zip:[21,25],zip_to_nbox_fold:25,zone:13,zshrc:[0,7]},titles:["Welcome to nbox\u2019s documentation!","Jobs + Deploy FAQs","QuickStart with NBX-Jobs","QuickStart with NBX-Deploy","nbox","nbox package","nbox Authentications","nbox.cli module","Pushing Understanding","nbox.framework.on_functions module","Framework on Operators","<code class=\"docutils literal notranslate\"><span class=\"pre\">hyperloop</span></code>","init module","NBX-Build Instances","NBX-Jobs","nbox.lib package","Architecture","nbox.lib.aws module","nbox.lib.comms module","nbox.lib.demo module","nbox.lib.dist module","nbox.lib.nbx_instances module","Notebook Operators","nbox.lib.shell module","nbox RPC support","nbox Networking","Operators","nbox.relics package","Relics Base Class","Local Relics","NimbleBox Relics","Subsystems","Engineering behind SSH","Subways","Utils","Quickstart","NimbleBox Concepts"],titleterms:{"class":28,api:0,architectur:16,authent:6,aw:17,base:28,behind:32,build:13,cli:[0,7,13],comm:18,command:13,commonli:0,concept:36,creat:[2,3],custom:[2,3],d:0,demo:19,deploi:[1,3],dist:20,document:[0,7,13],engin:[0,26,32],faq:1,framework:[9,10],get:0,hyperloop:11,index:0,init:12,instanc:[7,13],job:[1,2,3,14],lib:[15,17,18,19,20,21,23],line:3,local:29,modul:[7,9,12,17,18,19,20,21,23],more:[2,3],nbox:[0,4,5,6,7,9,15,17,18,19,20,21,23,24,25,27],nbx:[2,3,13,14],nbx_instanc:21,network:25,nimblebox:[30,36],notebook:22,on_funct:9,oper:[10,22,26],packag:[5,15,27],push:8,quickstart:[2,3,35],r:0,relic:[27,28,29,30],rpc:24,s:0,shell:23,ssh:[0,7,32],submodul:[5,8,15,27,31],subpackag:5,subsystem:31,subwai:33,support:24,tutori:0,two:3,uncom:3,understand:8,us:0,usag:32,util:34,welcom:0}})