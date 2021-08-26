export class AuthService {
    loggedIn = false;

    isAuthenticated():boolean{
        return this.loggedIn;
    }

    login(){
        this.loggedIn = true;
        
    }

    logout(){
        this.loggedIn = false;
    }
}