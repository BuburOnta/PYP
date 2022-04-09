import leftTopIcon from "./../../img/sect-2_left-top-icon.svg";
import bottom1Icon from "./../../img/illustrasi-umkm.svg";
import bottom2Icon from "./../../img/sect-2_bottom_finance.svg";
import bottom3Icon from "./../../img/sect-2_bottom_wallet.svg";
// import bottom4Icon from './../../img/sect-2_bottom_.svg';
import tes from "./../../img/tes.svg";
import tes2 from "./../../img/web-page.svg";
import tes3 from "./../../img/tes3.svg";

function Section2() {
    return (
        <div className="section-2">
            <div className="top">
                <div className="left_top">
                    <h3>
                        Panduan <br />
                        Pengguna
                    </h3>
                    <img src={leftTopIcon} alt="left top icon" />
                </div>

                <div className="right_top">
                    <h3>Fitur - fitur bermanfaat</h3>
                    <p>
                        Membantu masyarakat dan pelaku UMKM dalam mendapatkan
                        informasi aktual tentang kesehatan, UMKM sekitar, dan
                        keuangan
                    </p>
                </div>
            </div>

            <div className="bottom">
                <div className="left_bottom">
                    <h1>Apa saja fiturnya ?</h1>
                </div>

                <div className="right_bottom">
                    <div class="fitur satu">
                        <img src={bottom1Icon} alt="F" />
                        <span>Tech-Commerce</span>
                    </div>

                    <div class="fitur dua">
                        <img src={tes2} alt="" />
                        <span>FloNews</span>
                    </div>

                    <div class="fitur tiga">
                        <img src={tes3} alt="" />
                        <span>Flow-Vest</span>
                    </div>

                    <div class="fitur empat">
                        <img src={tes3} alt="F" />
                        <span>Fitur - fitur lain yang berguna</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section2;
