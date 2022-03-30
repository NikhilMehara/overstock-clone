const timer = () => {
    let i = 10 ;
    let id = setInterval(()=>{
        document.getElementById('timer').innerText = "Resend OTP in : " + i ;
        if(i===0){
            clearInterval(id) ;
            document.getElementById('timer').innerText = "Resend OTP" ;
            document.getElementById('timer').style.cursor = "pointer"
        }
        i-- ;
    },1000)
}

timer() ;

const submitOTP = () => {
    let otp = document.getElementById('otp_num').value ;
    if(otp==5555 || otp==0000){
        alert("Payment was successful") ;
        window.location.href = "" ;
    }
    else{
        alert("Wrong OTP , Enter again") ;
    }
}