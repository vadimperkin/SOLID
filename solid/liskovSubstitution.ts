abstract class Payments {
  public abstract processPayment(amount: number): boolean;
  public abstract reversePayment(amount: number): boolean;
}

class CreditCard extends Payments {
  public processPayment(amount: number): boolean {
    console.log("Processing payment...");
    // some payment processing logic
    //***********
    return true;
  }

  public reversePayment(amount: number): boolean {
    console.log("Reversing payment...");
    // some reverse processing logic
    //***********
    return true;
  }
}

class PaymentBox extends Payments {
  public processPayment(amount: number): boolean {
    console.log("Processing payment...");
    // some payment processing logic
    //***********
    return true;
  }

  public reversePayment(amount: number): boolean {
    console.log("Error!");
    throw new Error("Method not implemented!");
  }
}
// Here in Payments class we violate LSP principle by changing superclass reversePayment behavior.
//------------------------------------------------------------------------------------------------
interface IProcessPayment {
  processPayment(amount: number): boolean;
}

interface IReversePayment extends IProcessPayment {
  reversePayment(amount: number): boolean;
}


class LSPCreditCard implements IReversePayment {
  public processPayment(amount: number): boolean {
    console.log("Processing payment...");
    // some payment processing logic
    //***********
    return true;
  }

  public reversePayment(amount: number): boolean {
    console.log("Reversing payment...");
    // some reverse processing logic
    //***********
    return true;
  }
}

class LSPPaymentBox implements IProcessPayment {
    public processPayment(amount: number): boolean {
        console.log("Processing payment...");
        // some payment processing logic
        //***********
        return true;
      }
}
/*
By defining the reverse payment feature in a separate interface, 
we ensure that we only expect reverse payment behavior from entities 
that explicitly provide this capability.
*/
