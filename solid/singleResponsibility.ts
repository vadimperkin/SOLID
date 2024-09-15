import axios from "axios";

class User {
  constructor(protected user: string) {}

  private logToFile(error: string) {
    console.log("Logging error:", error);
  }

  // Update profile details in DB
  public async updateProfile() {
    try {
      await axios.patch(`www.myUrl.com/api/users/${this.user}`);
    } catch (error) {
      if (error instanceof Error) {
        this.logToFile(error.message);
      } else {
        this.logToFile("An unexpected error occurred");
      }
    }
  }
}
// User class overloaded by handling different actions (updating + logging).
// <------------------------------------------------------------------------->

class Logger {
  public printError(error: string) {
    console.log("Logging error:", error);
  }
}

class FixedUser {
  constructor(protected user: string) {}
  private logger = new Logger();

  public async updateProfile() {
    try {
      await axios.patch(`www.myUrl.com/api/users/${this.user}`);
    } catch (error) {
      if (error instanceof Error) {
        this.logger.printError(error.message);
      } else {
        this.logger.printError("An unexpected error occurred");
      }
    }
  }
}
// After segregating error logging process from the user update functionality, each class started to adhere SRP principle.
