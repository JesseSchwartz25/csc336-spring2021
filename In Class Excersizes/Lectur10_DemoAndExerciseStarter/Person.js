var person = {
    name: 'Calvin',
    age: 25,
    greet: function () {
        alert('My name is ' + this.name + '.');
    }
};
person.greet(); //My name is Calvin.