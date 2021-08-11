function bouncer(maxPeople, currentPeople, age)
{
    if (maxPeople < 50 && age > 18)
    {
        return "Come in";
    }
    else if(maxPeople > 50)
    {
        return "It's too busy now, come back later";
    }
    else if(age < 18)
    {
        return "This is a club for adults";
    }
}

console.log(bouncer(38, 20, 25));
console.log(bouncer(52, 52, 25));
console.log(bouncer(38, 20, 15));
