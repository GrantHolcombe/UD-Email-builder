import React, { Component } from 'react';
import head from './headTemplate.json';
import footer from './footerTemplate.json';

class TextVersion extends Component {
  render() {

    const data = this.props.data.content_data

    const contentBlocks = data.map((item, i) => {
      const linkArr = item.content_link.split('');
      let renderLink = ''
      if(linkArr.indexOf('#') !== -1){
        if(linkArr.indexOf('?') !== -1){
          linkArr.splice(linkArr.indexOf('#'), 0, "&" + item.content_utm);
          renderLink = linkArr.join('')
        }
        else{
          linkArr.splice(linkArr.indexOf('#'), 0, "?" + item.content_utm);
          renderLink = linkArr.join('')
        }
      }
      else if (linkArr.indexOf('?') !== -1) {
        linkArr.splice(linkArr.length, 0, "&" + item.content_utm);
        renderLink = linkArr.join('')
      }
      else {
        renderLink = item.content_link + '?' + item.content_utm
      }

        return (
          <div>
            <p>
              {item.content_alt}
              <br />
              {renderLink}
            </p>
          </div>
        )
      }
    );

    return (
      <div>
        <p>{this.props.data.preheader_data}</p>
        <p>{this.props.data.header_data}</p>
        <p>Urban Decay</p>
        <p>https://www.urbandecay.com/</p>
        {contentBlocks}
        <p>WHAT’S NEW</p>
        <p>https://www.urbandecay.com/featured/what%27s-new?utm_medium=email_brand&utm_source=sfmc&utm_campaign=%%emailname_%%&utm_content=bn-new</p>
        <p>EYES</p>
        <p>https://www.urbandecay.com/eyes?utm_medium=email_brand&utm_source=sfmc&utm_campaign=%%emailname_%%&utm_content=bn-eyes</p>
        <p>LIPS</p>
        <p>https://www.urbandecay.com/lips?utm_medium=email_brand&utm_source=sfmc&utm_campaign=%%emailname_%%&utm_content=bn-lips</p>
        <p>FACE</p>
        <p>https://www.urbandecay.com/face?utm_medium=email_brand&utm_source=sfmc&utm_campaign=%%emailname_%%&utm_content=bn-face</p>
        <p>MY ACCOUNT</p>
        <p>https://www.urbandecay.com/on/demandware.store/Sites-urbandecay-us-Site/default/Account-EditProfile?utm_medium=email_brand&utm_source=sfmc&utm_campaign=%%emailname_%%&utm_content=bn-account</p>
        <p>https://www.facebook.com/urbandecaycosmetics</p>
        <p>https://instagram.com/urbandecaycosmetics/</p>
        <p>https://www.youtube.com/channel/UCHkaVHdFbo4R_3Z_CkjuVnA</p>
        <p>https://twitter.com/urbandecay</p>
        <p>https://pinterest.com/urbandecay/</p>
        <p>https://urbandecay.tumblr.com/</p>
        <p>Contact Us</p>
        <p>https://www.urbandecay.com/contact-us?utm_medium=email_brand&utm_source=sfmc&utm_campaign=%%emailname_%%&utm_content=lg-contact</p>
        <p>|  Find a Store</p>
        <p>https://www.urbandecay.com/storelocator?utm_medium=email_brand&utm_source=sfmc&utm_campaign=%%emailname_%%&utm_content=lg-store</p>
        <p>|  Privacy Policy</p>
        <p>https://www.urbandecay.com/customer-service/privacy-policy.html?utm_medium=email_brand&utm_source=sfmc&utm_campaign=%%emailname_%%&utm_content=lg-privacy</p>
        <p>|  Unsubscribe</p>
        <p>http://pages.shop.urbandecay.com/page.aspx?QS=5c591a8916642e73ff288ad0fa61ffb7ed5530bbdb9080193c783a2c5f600872&sid=%%subscriberid%%&jobid=%%jobid%%</p>
        <p>Copyright %%xtyear%% Urban Decay Cosmetics. All rights reserved.</p>
        <p>833 W. 16th Street, Newport Beach, CA 92663</p>
        <p>{this.props.data.footer_data}</p>
        <p>Promotions and product offerings featured in this email are only applicable within the U.S. If you're located outside of the U.S., please visit the Urban Decay website within your country to sign up for emails customized to your region. Don't see an Urban Decay site for your country? We are constantly expanding, so please check back soon.</p>
      </div>
    );
  }
}

export default TextVersion;
