type User = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
};

class CognitoUserPool {
  userPool: User[] = [];
  findOne(username: string): User | undefined {
    const user = this.userPool.find((user) => user.username === username);
    return user;
  }
}

class MembersService {
  private userPool: CognitoUserPool = new CognitoUserPool();

  userAuth(username: string, password: string): boolean {
    // some logic
    const user = this.userPool.findOne(username);
    if (user != null) {
      // some logic to authenticate
      return true;
    }
    return false;
  }
}
/*
The MembersService class has a strict dependency on the CognitoUserPool class. 
This means that if the CognitoUserPool class undergoes changes, it could impact 
the functionality of MembersService.
*/
//----------------------------------------------------------------------
interface IUserPool {
  findOne(username: string): User | undefined;
}

class FixedCognitoUserPool implements IUserPool {
  userPool: User[] = [];
  findOne(username: string): User | undefined {
    const user = this.userPool.find((user) => user.username === username);
    return user;
  }
}

class FixedMicrosoftAdUserPool implements IUserPool {
    userPool: User[] = [];
    findOne(username: string): User | undefined {
      const user = this.userPool.find((user) => user.username === username);
      return user;
    }
  }

class FixedMembersService {
  constructor(private userPool: IUserPool) {}

  userAuth(username: string, password: string): boolean {
    // some logic
    const user = this.userPool.findOne(username);
    if (user != null) {
      // some logic to authenticate
      return true;
    }
    return false;
  }
}

const cognitoPool = new FixedCognitoUserPool();
const membersSvc = new FixedMembersService(cognitoPool);

const msAdPool = new FixedMicrosoftAdUserPool();
const membersSvc2 = new FixedMembersService(msAdPool);
/*
This design demonstrates adherence to the Dependency Inversion Principle (DIP) 
by ensuring that high-level modules, such as the FixedMembersService class, 
depend on abstractions (e.g., the IUserPool interface) rather than on concrete 
implementations.

By depending on the IUserPool abstraction, FixedMembersService is decoupled 
from specific user pool implementations like FixedCognitoUserPool or 
FixedMicrosoftAdUserPool. This decoupling allows for greater flexibility and 
easier maintenance.
*/