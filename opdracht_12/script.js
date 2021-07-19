const age = 23;
const isFemale = true;
const driverStatus = 'bob';
const firstName = 'Bram';
const totalAmount = 75;

if (age >= 18 && age <= 25)
{
    console.log('Je krijgt 50% korting!');
}

else
{
    console.log('Je mag niet naar binnen!');
}

if (firstName === 'Bram' || firstname === 'Sarah')
{
    console.log('Je hebt recht op een gratis biertje!');
}

if (totalAmount > 25)
{
    console.log('Je hebt recht op gratis (vega)bitterballen!');
    if (totalAmount > 50)
    {
        console.log('Je hebt recht op gratis nachos!');
        if (totalAmount > 100)
	{
	    console.log('Je hebt recht op een gratis flesje champagne!');
        }
    }
}