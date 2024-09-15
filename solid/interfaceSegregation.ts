interface IGadgetStoreManager {
  listPhones(company: string): string;
  shipPhones(): string;
  listTV(company: string): string;
  shipTv(): string;
}

class PhonesProductManager implements IGadgetStoreManager {
  listPhones(company: string): string {
    // some logic
    return `Below will be provided list of phones for this ${company}`;
  }

  shipPhones(): string {
    // some logic
    return "The goods have been sent!";
  }

  listTV(company: string): string {
    throw new Error("Not applicable for such type of product!");
  }

  shipTv(): string {
    throw new Error("Not applicable for such type of product!");
  }
}

class TvProductManager implements IGadgetStoreManager {
  listPhones(company: string): string {
    throw new Error("Not applicable for such type of product!");
  }

  shipPhones(): string {
    throw new Error("Not applicable for such type of product!");
  }

  listTV(company: string): string {
    // some logic
    return `Below will be provided list of tv's for this ${company}`;
  }

  shipTv(): string {
    // some logic
    return "The goods have been sent!";
  }
}
/*
Both classes are required to implement all methods defined in the interface, 
even though some of these methods may not be relevant to their specific types 
of product.
*/
//---------------------------------------------------------------------------
interface IPhoneStoreManager {
  listPhones(company: string): string;
  shipPhones(): string;
}

interface ITvStoreManager {
  listTV(company: string): string;
  shipTv(): string;
}

class FixedPhonesProductManager implements IPhoneStoreManager {
  listPhones(company: string): string {
    // some logic
    return `Below will be provided list of phones for this ${company}`;
  }

  shipPhones(): string {
    // some logic
    return "The goods have been sent!";
  }
}

class FixedTvProductManager implements ITvStoreManager {
  listTV(company: string): string {
    // some logic
    return `Below will be provided list of tv's for this ${company}`;
  }

  shipTv(): string {
    // some logic
    return "The goods have been sent!";
  }
}
// Now each class implements only those interface that is relevant to its features.
