// Add a new method to person

person.calculateAge = function (yearsFromNow) {
    var self = this;

    function yearsOld() {
        return self.age + yearsFromNow;
    }

    alert('I will be ' + yearsOld() + ' years old ' + yearsFromNow + ' years from now.');
}
person.calculateAge(10); //I will be 35 years old 10 years from now.