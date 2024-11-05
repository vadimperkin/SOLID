enum DeliveryMethod {
  Standart,
  Express,
}

class DeliveryCalculator {
  public calculateDeilvery(method: DeliveryMethod, totalOrder: number) {
    if (method === DeliveryMethod.Standart) {
      return totalOrder * 0.05;
      // 5% for Standart delivery
    } else {
      return totalOrder * 0.1;
      // 10% for Express delivery
    }
  }
}
/*
Implementing a new delivery method will require modification
of the DeliveryCalculator method. This change has the potential
to affect existing functionality.
*/
//-------------------------------------------------------------
enum NewDeliveryMethod {
  Standart,
  Express,
  Ultrafast,
}

abstract class FixedDeliveryCalculator {
  public abstract calculateDeilvery(totalOrder: number): number;
}

class StandartDelivery extends FixedDeliveryCalculator {
  public calculateDeilvery(totalOrder: number): number {
    return totalOrder * 0.05;
    // 5% for Standart delivery
  }
}

class ExpressDelivery extends FixedDeliveryCalculator {
  public calculateDeilvery(totalOrder: number): number {
    return totalOrder * 0.1;
    // 10% for Express delivery
  }
}

class UltrafastDelivery extends FixedDeliveryCalculator {
  public calculateDeilvery(totalOrder: number): number {
    return totalOrder * 0.2;
    // 20% for Ultrafast delivery
  }
}
/**By using abstract methods in our base class, we allow for new delivery methods
 * to be added without changing the existing code */
