//balance (كمية المبلغ)
function balance()
{   
    var balance1 = '25000';
    var balance2 = '10000';
    var balance3 = '5000';
    var balance4 = '1000';
    var balance5 = '500';
    balance = (balance1*8) + (balance2*20) + (balance3*40) + (balance4*200) + (balance5*400);
    return balance;
}

//withdraw (سحب المبلغ)
function withdrawal()
{
       
    var choose=[prompt('1)25000  2)10000  3)5000  4)1000  5)500')];
    if(choose == 1)
        {
            alert('you withdrawal 25000');
        }
    if(choose == 2)
        {
            alert('you withdrawal 10000');
        }
    if(choose == 3)
        {
            alert('you withdrawal 5000');
        }
    if(choose == 4)
        {
            alert('you withdrawal 1000');
        }
    if(choose == 5)
        {
            alert('you withdrawal 500');
        }
}



//deposit(ايداع المبلغ)






//user name and password
var ID = function(user_id , password)
{
    user_id = ['143146'];
    password = ['1111'];
        if(user_ID[0]==user_id && pass[0]==password)
        {
            document.write('helleo ibo you are login successfully</br>');
            document.write('total balance is :' + balance());
            withdrawal();
        }
        else
        {
            alert('error in user ID or password');
        }
    return [user_id,password];
};
        var user_ID = [prompt("please enter your ID:")];
        var pass = [prompt("please enter your password: ")];
ID();
