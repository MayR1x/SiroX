module.exports = ({
    name: "balance",
    code: `
$title[Profile $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[$addField[**Cash:**; $getUserVar[money]]]
`
});