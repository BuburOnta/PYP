import { icon } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logos from "./../../img/tflow-logo_footer.png";

function Footer(logo) {
    return (
        <footer className="footer">
            <div class="card logo">
                <img src={logos} alt="" />
                <h1>tFlow</h1>
            </div>

            <div className="card alamat">
                <p>Jl. Bhakti Suci No. 100, Kelurahan Cimpaeun, Kecamatan Tapos, Kota Depok, Jawa Barat 16459</p>
            </div>

            <div className="card_group">
                <div class="card satu">
                    <h1>Fitur tFlow</h1>
                    <ul>
                        <li>T-Commerce</li>
                        <li>FloNews</li>
                        <li>FloFest</li>
                    </ul>
                </div>
                
                <div class="card dua">
                    <h1>Fitur lainnya</h1>
                    <ul>
                        <li>Berbagi</li>
                        <li>Pasar Saham</li>
                        <li>Kotak saran</li>
                    </ul>
                </div>

                <div class="card tiga">
                    <h1>Bantuan & Panduan</h1>
                    <ul>
                        <li>Vulerability Report</li>
                        <li>Layanan Pengaduan</li>
                        <li>Syarat & Ketentuan</li>
                        <li>Tentang Kami</li>
                        <li>Kontak kami</li>
                        <li>Press Kit</li>
                        <li>Bantuan</li>
                    </ul>
                </div>

                <div class="card empat">
                    <h1>Hubungi Kami</h1>
                    <ul>
                        <li>0881238398</li>
                        <li>karthala@gmail.com</li>
                        <li>@karthala</li>
                    </ul>
                </div>
            </div>

            <div className="card kontak">
                <i class="fa-brands fa-whatsapp-square"></i>
                <i class="fa-solid fa-envelope"></i>
                <i class="fa-solid fa-phone"></i>
                <i class="fa-brands fa-instagram-square"></i>
            </div>

            <div className="card foot">
                <span>2022 tFlow. Common Creative<br/>tFlow Team</span>
            </div>
        </footer>
    );
}

export default Footer;
