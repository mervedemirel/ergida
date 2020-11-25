import React from "react";
import { Link, withTranslation } from "../../../../i18n";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import {IoIosPhonePortrait, IoMdMail} from "react-icons/io";

const Footer = ({t}) => {
  return (
    <div className="container-fluid py-3 Footer">
      <div className="container px-0">
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <div className="row">
              <div className="col-12 col-md-4">
                <h4 className="text-white mt-2">{t('antalyaContact')}</h4>
                <p className="m-0 mt-1">
                  Bağlık Mahallesi, Gödene Caddesi, No: 189 <br />
                  Er Gıda Paketleme Tesisi, Kumluca / Antalya
                </p>
                <p className="p-0 m-0 mt-md-2">
                  <b><IoIosPhonePortrait style={{fontSize: '1.3rem'}} /></b> <a href="tel:+902428870222" style={{textDecoration: 'none', color: 'white'}}>+90 242 887 0 222</a>
                </p>
                <p className="p-0 m-0 mt-md-1">
                  <b><IoIosPhonePortrait style={{fontSize: '1.3rem'}} /></b> <a href="tel:+905468870222" style={{textDecoration: 'none', color: 'white'}}>+90 546 887 0 222</a>
                </p>
                <p className="p-0 m-0 mt-md-1">
                <b><IoMdMail/></b> <a style={{textDecoration: 'none', color: 'white'}} href="mailto:ergidatarim@hotmail.com">ergidatarim@hotmail.com</a>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <h4 className="text-white mt-2">{t('muglaContact')}</h4>
                <p className="m-0 mt-1">
                  Karaçulha Mahallesi, Sarnıç Sokak, Muğla Büyükşehir Belediyesi
                  <br />
                  Fethiye Toptancı Hali, M Blok No: 132, Fethiye/Muğla
                </p>
                <p className="p-0 m-0 mt-md-2">
                  <b><IoIosPhonePortrait style={{fontSize: '1.3rem'}} /></b> <a href="tel:+902428870222" style={{textDecoration: 'none', color: 'white'}}>+90 242 887 0 222</a>
                </p>
                <p className="p-0 m-0 mt-md-1">
                  <b><IoIosPhonePortrait style={{fontSize: '1.3rem'}} /></b> <a href="tel:+905468870222" style={{textDecoration: 'none', color: 'white'}}>+90 546 887 0 222</a>
                </p>
                <p className="p-0 m-0 mt-md-1">
                  <b><IoMdMail/></b> <a style={{textDecoration: 'none', color: 'white'}} href="mailto:ergidatarim@hotmail.com">ergidatarim@hotmail.com</a>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <h4 className="text-white mt-2">{t('quickLinks')}</h4>
                <div className="row m-o p-0">
                  <div className="col-12 col-md-6 p-0 m-0 d-flex flex-column">
                    <Link href="/kurumsal">
                      <a style={{ textDecoration: "none", color: "white", fontSize: "14px"}}>
                        {t('mobileLinks', {returnObjects: true}).kurumsal.text}
                      </a>
                    </Link>
                    <Link href="/hizmetlerimiz">
                      <a style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>
                      {t('mobileLinks', {returnObjects: true}).hizmetler.text}
                      </a>
                    </Link>
                    <Link href="/meyve">
                      <a style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>
                      {t('mobileLinks', {returnObjects: true}).meyve.text}
                      </a>
                    </Link>
                    <Link href="/sebze">
                      <a style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>
                      {t('mobileLinks', {returnObjects: true}).urun.text}
                      </a>
                    </Link>
                  </div>
                  <div className="col-12 col-md-6 p-0 m-0 d-flex flex-column">
                      <Link href="/narenciye">
                      <a style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>
                      {t('mobileLinks', {returnObjects: true}).citrus.text}
                      </a>
                    </Link>
                    <Link href="/galeri">
                      <a style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>
                      {t('mobileLinks', {returnObjects: true}).gallery.text}
                      </a>
                    </Link>
                    <Link href="/iletisim">
                      <a style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>
                      {t('mobileLinks', {returnObjects: true}).contact.text}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex mt-3 mt-md-0">
            <div className="row m-0 p-0 w-100">
              <div className="col-12 col-md-6 d-flex align-items-center flex-column mt-4" style={{ top: "40px"}} >
                <a>Copyright &copy; </a> 
                <a style= {{color: "white", fontSize: "1.3rem", fontFamily: "Tahoma"}}> &nbsp;VOGAART&nbsp; </a> 
                <a>2019 - {t('allRights')} </a>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-end align-items-center flex-column">
                <div className="grid-container">
                <div className="grid-item">
                <img
                  src="../../../static/images/kırmızıLogo-01.png"
                  className="logo mt-5"
                  alt="Ergıda Tarım Logo"
                  style={{ height: "66px" }}
                />
                </div>
                <div className="grid-item">
                <a
                  href="https://www.facebook.com/ergida48"
                  style={{ color: "white", fontSize: "1.5rem" }}
                  className="mr-3"
                >
                  &nbsp;<FaFacebookSquare />
                </a>
                <a
                  href="https://twitter.com/"
                  style={{ color: "white", fontSize: "1.5rem" }}
                  className="mr-3"
                >
                  <FaTwitterSquare />
                </a>
                <a
                  href="https://www.instagram.com/ergidatarim/"
                  style={{ color: "white", fontSize: "1.5rem" }}
                >
                  <FaInstagram />
                </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .Footer {
          background: #545454;
          color: white;
        }
        .grid-container{
            display: grid;
            grid-template-columns: auto;
        }
      `}</style>
    </div>
  );
};

export default withTranslation('header')(Footer);
