const express = require('express')

const app = express()

app.get('/home', loadstdHtml);
app.get('/Admin', admin);
app.get('/collector', collectors);
app.get('/emplogin',emplogins);
app.get('/userlogin',userlogins);
app.get('/userreg',userregs);
app.get('/emps', empss);
app.get('/user', users);

app.get('/user/ApplyCast',costs);
app.get('/user/ApplyBirth',births);
app.get('/user/ApplyDeath',deaths);
app.get('/user/ApplyPention',pentions);
app.get('/user/ApplyRation',rations);
app.get('/user/comdetails',complaint);
app.get('/user/viewcomdetails',viewcomplaint);
app.get('/user/viewcast',viewcasts);
app.get('/user/viewdeath',viewdeaths);
app.get('/user/viewration',viewrations);
app.get('/user/viewpention',viewpentions);
app.get('/user/viewbirth',viewbirths);
app.get('/user/profile',viewprofile);
app.get('/user/chagepwd',UserChangePwd);

app.get('/admin/Addempdetails',emp);
app.get('/admin/viewempdetails',viewemp);
app.get('/admin/AdminViewCast',viewcast);
app.get('/admin/AdminViewRation',viewration);
app.get('/admin/AdminViewBirth',viewbirth);
app.get('/admin/AdminViewPention',viewpention);
app.get('/admin/AdminViewDeath',viewdeath);
app.get('/admin/chagepwd',AdminChangePwd);

app.get('/emp/EmpViewCast',empviewcast);
app.get('/emp/EmpViewbirth',empviewbirth);
app.get('/emp/EmpViewpention',empviewpention);
app.get('/emp/EmpViewration',empviewration);
app.get('/emp/EmpViewdeath',empviewdeath);
app.get('/emp/ViewProfile',empviewprofile);
app.get('/emp/Viewcomplaint',empviewcomplaints);
app.get('/emp/chagepwd',empChangePwd);


app.listen(3000, () => console.log(`Example app listening on port 3000!`))

function loadstdHtml(req, res) {
    
    res.sendFile('Main.html',{ root: __dirname });

}

function admin(req, res) {
   // res.header("Control-Access-Allow-Origin","*")
    res.sendFile('CollectorLogin.html',{ root: __dirname });

}

function emplogins(req, res) {
    
    res.sendFile('EmployeeLogin.html',{ root: __dirname });

}

function userlogins(req, res) {
    
    res.sendFile('UserLogin.html',{ root: __dirname });

}
function collectors(req, res) {
    
    res.sendFile('Admin/CollectorMain.html',{ root: __dirname });

}
function empss(req, res) {
    
    res.sendFile('Employee/EmpMain.html',{ root: __dirname });

}
function users(req, res) {
    
    res.sendFile('User/UserMain.html',{ root: __dirname });

}
function userregs(req, res) {
    
    res.sendFile('UserReg.html',{ root: __dirname });

}
//User
function costs(req, res) {
    
    res.sendFile('User/ApplyCast.html',{ root: __dirname });

}
function births(req, res) {
    
    res.sendFile('User/ApplyBirth.html',{ root: __dirname });

}
function deaths(req, res) {
    
    res.sendFile('User/ApplyDeath.html',{ root: __dirname });

}
function pentions(req, res) {
    
    res.sendFile('User/ApplyPention.html',{ root: __dirname });

}
function rations(req, res) {
    
    res.sendFile('User/ApplyRation.html',{ root: __dirname });

}
function complaint (req, res) {
    
    res.sendFile('User/AddComplaint.html',{ root: __dirname });

}
function viewcomplaint (req, res) {
    
    res.sendFile('User/ViewComplaint.html',{ root: __dirname });

}
function viewprofile (req, res) {
    
    res.sendFile('User/UserProfile.html',{ root: __dirname });

}
function viewbirths (req, res) {
    
    res.sendFile('User/UserViewBirth.html',{ root: __dirname });

}
function viewpentions (req, res) {
    
    res.sendFile('User/UserViewPention.html',{ root: __dirname });

}
function viewdeaths (req, res) {
    
    res.sendFile('User/UserViewDeath.html',{ root: __dirname });

}
function viewrations (req, res) {
    
    res.sendFile('User/UserViewRation.html',{ root: __dirname });

}
function viewcasts (req, res) {
    
    res.sendFile('User/UserViewCast.html',{ root: __dirname });

}
function UserChangePwd (req, res) {
    
    res.sendFile('User/ChangePassword.html',{ root: __dirname });

}


//Admin


function viewcast(req, res) {
    
    res.sendFile('Admin/AdminViewCast.html',{ root: __dirname });

}
function viewbirth(req, res) {
    
    res.sendFile('Admin/AdminViewBirth.html',{ root: __dirname });

}
function viewdeath(req, res) {
    
    res.sendFile('Admin/AdminViewDeath.html',{ root: __dirname });

}
function viewpention(req, res) {
    
    res.sendFile('Admin/AdminViewPention.html',{ root: __dirname });

}
function viewration(req, res) {
    
    res.sendFile('Admin/AdminViewRation.html',{ root: __dirname });

}

function emp(req, res) {
    
    res.sendFile('Admin/AddEmpdetails.html',{ root: __dirname });

}
function viewemp (req, res) {
    
    res.sendFile('Admin/AdminViewEmp.html',{ root: __dirname });

}
function AdminChangePwd (req, res) {
    
    res.sendFile('Admin/ChangePassword.html',{ root: __dirname });

}

//EMP
function empviewcast(req, res) {
    
    res.sendFile('Employee/EmpViewCast.html',{ root: __dirname });

}
function empviewdeath(req, res) {
    
    res.sendFile('Employee/EmpViewDeath.html',{ root: __dirname });

}
function empviewbirth(req, res) {
    
    res.sendFile('/Employee/EmpViewBirth.html',{ root: __dirname });

}
function empviewpention(req, res) {
    
    res.sendFile('Employee/EmpViewPention.html',{ root: __dirname });

}
function empviewration(req, res) {
    
    res.sendFile('Employee/EmpViewRation.html',{ root: __dirname });

}
function empviewprofile(req, res) {
    
    res.sendFile('Employee/EmpViewProfile.html',{ root: __dirname });

}
function empviewcomplaints(req, res) {
    
    res.sendFile('Employee/ViewComplaints.html',{ root: __dirname });

}
function empChangePwd(req, res) {
    
    res.sendFile('Employee/ChangePassword.html',{ root: __dirname });

}

