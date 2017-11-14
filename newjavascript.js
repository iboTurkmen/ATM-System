var amount = 0;
var process_count = 0;
//balance (كمية المبلغ)
function balance()
{   
    var balance1 = 25000;
    var balance2 = 10000;
    var balance3 = 5000;
    var balance4 = 1000;
    var balance5 = 500;
    total_balance = (balance1*8) + (balance2*20) + (balance3*40) + (balance4*200) + (balance5*400);
    return total_balance;
    //Taner'den: abi neden 5 farklı balance var ve hepsini farklı sayılarla çarptın anlayamadım ama umarım yanlış ilerlemiyorumdur.
}

//withdraw (سحب المبلغ)
function withdrawal()
{
    money = false;
    if ((balance()-amount) <= 0) 
    {
        document.write("<p><strong>You have not enough money to withdraw , check your total balance at above :( </strong>");
    }
    else
    {
        choose=[prompt('1)25000\n  2)10000\n  3)5000\n  4)1000\n  5)500\n')];
        if(choose == 1){
            alert('you withdrawal 25000');
            money = 25000;
        }
        else if(choose == 2){
            alert('you withdrawal 10000');
            money = 10000;
        }
        else if(choose == 3){
            alert('you withdrawal 5000');
            money = 5000;
        }
        else if(choose == 4){
            alert('you withdrawal 1000');
            money = 1000;
        }
        else if(choose == 5){
            alert('you withdrawal 500');
            money = 500;
        }
        else{
            if(confirm("You have choosed invalid option\n Do you want to try again ? "))
                document.write("<p> PROCESS : #" + process_count + "# Choosed Option : #" + choose + "# --> Process is NOT successfull , Invalid option selected</p>");
            else
                location.reload();
        }

        if(money !== false)
        {
            amount += money;
            current_balance = balance() - amount;
            process_count++;
            document.write("<p> PROCESS : #" + process_count + "# Choosed Option : #" + choose + "# --> Process is successfull , withdrawn amount :  " + money + "$</p>");
            document.getElementById('total_balance_message').innerHTML = "<strong>total balance is : " + current_balance + "$</strong>";
        }
    }
}



//deposit(ايداع المبلغ)

function deposit_money(){
    deposit = prompt("Enter Amount to Deposit : ");
    amount -= deposit;
    current_balance = balance() - amount;
    document.getElementById('total_balance_message').innerHTML = "<strong>total balance is : " + current_balance + "$</strong>";
}




//user name and password
var ID = function(user_ID,pass)
{
    user_id = '143146';
    password = '1111';
        if(user_ID == user_id && pass == password)
        {
            document.write('hello ibo you are login successfully</br>');
            document.write('<p id="total_balance_message"><strong>total balance is :' + balance() + "$</strong></p>");
            document.write('<input type="button" onclick="withdrawal()" value="Withdraw Some Money"/> <br> <br>');
            document.write('<input type="button" onclick="deposit_money()" value="Deposit Some Money"/>');
            document.write("<p> PROCESSES : </p> <hr width='25%' align='left'>");
            return [user_ID,pass];
        }
        else
        {
            alert('error in user ID or password');
            location.reload();
        }
};

//Taner'den : ibocum index.html dosyasında 12. satırdaki butona bastıgın zaman bu fonksiyonu çalıştırır.
function login()
{
    user_ID = document.getElementById("uname").value;
    pass = document.getElementById("pass").value;
    ID(user_ID,pass);
}