var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(function () {
            console.log(this.yelp);
            // with the bind() method ,object can borrow a method from another object
        }.bind(this));
    }
};
foot.kick();