const placeOrder = () => {
    let card = document.getElementById('card_number').value ;
    card = String(card) ;
    let cvv = document.getElementById('cvv').value ;
    cvv = String(cvv) ;
    if(card.length===16){
        if(card==='1234567891234567' && cvv==='321'){
           window.location.href = '' ;
        }
        else if(card==='14785236914785236' && cvv==='789'){
            window.location.href = '' ;
        }
        else{
            alert('Invalid Card Details') ;
        }
    }
    else{
        alert('Please enter a valid Card Number') ;
    }
    
}