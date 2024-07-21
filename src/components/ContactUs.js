import HelpSupport from './HelpSupport';
const ContactUs = () => {
  const companyData = {
    name: "EatGo",
    location: 'Bengaluru',
    address: 'No 123/23, Random road, Bangalore, India'
  }
  return (
    <div className="body common-page-container">
      <h3>Help & Support</h3>
     <HelpSupport companyData={companyData}/>
    </div>
  );
};

export default ContactUs;
