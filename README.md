**Running the VADAR Server**  
Firstly please ensure that you have downloaded and installed node, and that you have assigned the node program files folder to your PATH environent variable.

Open a command prompt and change the current folder to the VADAR.SERVER folder within root i.e.   

cd c:\<root>\vadar\vadar.server.  

now exeute the server by endering the following:  

**node server.js**  

The server should now be listening on http://localhost:8002.

**Accessing the VADAR board**

Open a web browser and navigate to the index.html file located at <root>\vadar\vadar.board\index.html  

Currently the response from the server is being mocked as follows:  
- initially there will be two failing jobs  
- after the second call to the server there OSP.QA will fail.
- after the tenth call to the server OSP.QA will revert to being successful.

if at any point you want to restart this behaviour simply stop and restart the node server by pressing CTRL+C in the node command window and restarting the server using the command *node server.js*
  

