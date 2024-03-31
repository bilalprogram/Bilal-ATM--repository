#! /usr/bin/env node

import inquirer from  "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance = 20000; //Dollar
const myPin = 6789;

let pinAnswer = await inquirer.prompt(
    [
       {
        name: "pin",
        message: "enter your pin number",
        type: "number",
 
       } 
    ]
);

if (pinAnswer.pin === myPin) { 
    console.log("Correct pin code!!!");
    
    let operationAns = await inquirer.prompt(
                [ 
            {
                name: "operation",
                message: "please select your transaction method",
                type: "list",
                choices: ["withdraw","check balance","Fast Cash"],
            }
        ]            
        
    );
   // console.log(operationAns);

    if (operationAns.operation === "withdraw") { 
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number",
                }
            ]
        );
    
        
    if (amountAns.amount <= myBalance && amountAns.amount >=500){

        
        //=, -=, +=

        myBalance -= amountAns.amount;

       // console.log("Your remaining balance is: " + myBalance);
        console.log(`Your remaining balance is: ${myBalance}`); //temple literals ,convert
        
    }

    else{
        console.log("Insufficient Balance!");
        
    }
}
    if (operationAns.operation === "Fast Cash") {
        let fastCashOption = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message:"Select the amount you want to withdraw",
                    type: "list",
                    choices: ['1000', '2000', '5000', '10000'],
                }
            ]
        )
    
    if (fastCashOption.amount === '1000'){
        myBalance -= fastCashOption.amount
        console.log(`Your remaining balance is: ${myBalance}`); 
    }
    else if (fastCashOption.amount === '2000'){
        myBalance -= fastCashOption.amount
        console.log(`Your remaining balance is: ${myBalance}`); 
    }    
    else if (fastCashOption.amount === '5000'){
        myBalance -= fastCashOption.amount
        console.log(`Your remaining balance is: ${myBalance}`); 
    }   
    else if (fastCashOption.amount === '10000'){
        myBalance -= fastCashOption.amount
        console.log(`Your remaining balance is: ${myBalance}`); 
    } 
    else if (fastCashOption.amount === '100000'){
        myBalance -= fastCashOption.amount
        console.log(`Insufficient balance please recharge`); 
    }    
}    
 
if (operationAns.operation === "check balance"){
    console.log(`Your balance is: ${myBalance}`);
}
}
 else{
    console.log("incorrect pin number");
}  
 
