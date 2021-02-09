class User{
    //Smider vores attributter ind i vores constructor
    constructor(ID, fullName, password, about, age, gender, datingPreferences){
        this.ID = ID;
        this.fullName = fullName;
        this._password = password;
        this.about = about;
        this.age = age;
        this.gender = gender;
        this.datingPreferences = datingPreferences;
    }

    get fullName(){
        return this.fullName
    };

    set about(newAbout){
        return this.newAbout.updateUser()
    };

    get about(){
        return this.about
    };

    get age(){
        return this.age
    };

    get gender(){
        return this.gender
    };

    
//Her skriver vi vores tilhørende funktioner - skrives senere 
likeUser(){}
deleteMatch(){}
dislikeUser(){}
updateUser(){}
};

class Match{
    constructor(ID, likedUsers, dateOfMatch){
        this.ID = ID;
        this.likedUsers = likedUsers;
        this.dateOfMatch = dateOfMatch;
    }

    

};

class Picture{
    constructor(ID,type){
        this.ID=ID;
        this.type=type;
    }
uploadImage()
deleteImage()
};

class Location{
    constructor(street, city, postalcode, country){
        this._street=street;
        this.city=city;
        this.country=country;
    }
changeLocation()
};
 