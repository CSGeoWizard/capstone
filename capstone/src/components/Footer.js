const Footer = () => {
    return (
    <footer>
        <img src="Logo.svg" alt="Little Lemon Logo"/>
        <ul>
            <li><a href="social">Social Media</a></li>
            <ul>
                <li><a href="facebook">Facebook</a></li>
                <li><a href="twitter">Twitter</a></li>
                <li><a href="instagram">Instagram</a></li>
            </ul>
            <li><a href="navigation">Navigation</a></li>
            <ul>
                <li><a href="home">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="menu">Menu</a></li>
                <li><a href="reservations">Reservations</a></li>
                <li><a href="order">Order Online</a></li>
                <li><a href="login">Login</a></li>
            </ul>
            <li><a href="contact">Contact</a></li>
            <ul>
                <li><a href="address">Address</a></li>
                <li>Phone Number</li>
                <li><a href="mailto:email">Email</a></li>
            </ul>
        </ul>
    </footer>
    )
}

export default Footer