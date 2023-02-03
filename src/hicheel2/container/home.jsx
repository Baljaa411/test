import React from "react";
// import Card from "../component/card";
// import Zurag from "../assets/R.jpeg"
import "./home.css"
import Movielist from "../component/card/movielist.js";

import tt from "../assets/tt.jpg"
import R from "../assets/R.jpeg"
import Sadako from "../assets/sadako.jpg"
import yy from "../assets/yy.jpg"
import uu from "../assets/uu.jpg"
import ii from "../assets/ii.jpg"
import oo from "../assets/oo.jpg"
import pp from "../assets/pp.jpg"
import aa from "../assets/aa.jpg"
import ss from "../assets/ss.jpg"
import dd from "../assets/dd.jpg"
import ff from "../assets/ff.jpg"
import gg from "../assets/gg.jpg"
import hh from "../assets/hh.jpg"
import jj from "../assets/jj.jpg"
import kk from "../assets/kk.jpg"
import ll from "../assets/ll.jpg"
import zz from "../assets/zz.jpg"
import xx from "../assets/xx.jpg"
import cc from "../assets/cc.jpg"
import pussBoots1 from "../assets/pussBoots1.jpg"
import qq from "../assets/qq.jpg"
import ww from "../assets/ww.jpg"
import ee from "../assets/ee.jpg"
import rr from "../assets/rr.jpg"

const Home = () =>{
    return(
        <div className="home">
                <div className="list">
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={Sadako}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={tt}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={yy}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={uu}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={ii}/>
                </div>
                <div className="list">
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={oo}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={pp}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={aa}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={ss}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={dd}/>
                </div>
                <div className="list">
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={ff}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={gg}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={hh}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={jj}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={kk}/>
                </div>
                <div className="list">
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={ll}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={zz}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={xx}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={cc}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={qq}/>
                </div>
                <div className="list">
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={ww}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={ee}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={rr}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={pussBoots1}/>
                    <Movielist title="Puss in Boots (2011) FHD Монгол хэлээр" img={R}/>
            </div>

        </div>
    )
}

export default Home