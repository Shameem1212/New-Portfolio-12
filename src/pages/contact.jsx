import "../styles/contact.css";
export default function Contact() {
  return (
    <div>
      <h1>Contact page</h1>
      <form action="" method="get">
        <div>
          <label for="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label for="email">Email Address</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label for="message">Message</label>
          <input type="text" name="message" id="message" required />
        </div>
        <div>
          <input type="submit" value="Submit!" />
        </div>
      </form>
    </div>
  );
}
