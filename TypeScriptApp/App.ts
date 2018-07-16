class HelloWorldApp
{
    constructor()
    {
        switch(new Date().getDay())
        {
            case 0:
                this.dayOfTheWeek = "Sunday";
            break;

            case 1:
                this.dayOfTheWeek = "Monday";
            break;
            
            case 2:
                this.dayOfTheWeek = "Tuesday";
            break;

            case 3:
                this.dayOfTheWeek = "Wednesday";
            break;

            case 4:
                this.dayOfTheWeek = "Thursday";
            break;

            case 5:
                this.dayOfTheWeek = "Friday";
            break;

            case 6:
                this.dayOfTheWeek = "Saturday";
            break;

            
        }

    }

    private dayOfTheWeek:  string;

    public Greet(person: string): void
    {
        console.info("Good to see you " + person  + " on this fine " + this.dayOfTheWeek);
    }

}

let myApp = new HelloWorldApp();
myApp.Greet("Huseyin");

