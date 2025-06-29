import CBSSPORTSLogo from '../assets/CBSSPORTS.png';
import FUELLogo from '../assets/FUEL.webp';
import CBSLogo from '../assets/CBS.png';
import DWNewsLogo from '../assets/dwnews.png';
import BBCLogo from '../assets/BBC.png';
import CGTNLogo from '../assets/cgtn.webp';
import CRAVELogo from '../assets/CRAVE.webp';
import TNTLogo from '../assets/TNT.png';
import MOTOSPORTSLogo from '../assets/MOTOSPORTS.png';
import DISNEYLogo from '../assets/DISNEY.png';
import DISCOVERYLogo from '../assets/DISCOVERY.png';
import DISNEYXDLogo from '../assets/DISNEYXD.png';
import CNLogo from '../assets/CN.png';
import GAMEPLUSLogo from '../assets/GAMEPLUS.jpg';

const channels = [
  {
    id: 1,
    name: "CBS Sports",
    logo: CBSSPORTSLogo,
    category: "Sports",
    streamUrl: "https://fl3.moveonjoy.com/CBS_SPORTS_NETWORK/tracks-v1a1/mono.ts.m3u8"
  },
  
  {
    id: 2,
    name: "FUEL TV",
    logo: FUELLogo,
    category: "Sports",
    streamUrl: "https://amg01074-fueltv-fueltvemeaen-rakuten-b6j62.amagi.tv/hls/amagi_hls_data_rakutenAA-fueltvemeaen/CDN/master.m3u8"
  },
  {
    id: 3,
    name: "CBS",
    logo: CBSLogo,
    category: "News",
    streamUrl: "https://cbsn-us.cbsnstream.cbsnews.com/out/v1/55a8648e8f134e82a470f83d562deeca/master.m3u8"
  },
  {
    id: 4,
    name: "DW News",
    logo: DWNewsLogo,
    category: "News",
    streamUrl: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/stream05/streamPlaylist.m3u8"  
  },
  {
    id: 5,
    name: "BBC News",
    logo: BBCLogo,
    category: "News",
    streamUrl: "https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8"
  },
  {
    id: 6,
    name: "CGTN Russian",
    logo: CGTNLogo,
    category: "News",
    streamUrl: "https://russian-livews.cgtn.com/hls/LSvexABhNipibK5KRuUkvHZ7220802LSTeze9o8tdFXMHsb1VosgoT220802cd/playlist.m3u8"
  },
  {
    id: 7,
    name: "CRAVE",
    logo: CRAVELogo,
    category: "Movies",
    streamUrl: "https://fl3.moveonjoy.com/CRAVE_4/tracks-v1a1/mono.ts.m3u8"
  },
  {
    id: 8,
    name: "TNT",
    logo: TNTLogo,
    category: "Music",
    streamUrl: "https://streaming.televizor-24-tochka.ru/live/38-req_offset_28000000-req_window_0-2k_v5.m3u8"
  },
  {
    id: 9,
    name: "MOTO SPORT",
    logo: MOTOSPORTSLogo,
    category: "Sports",
    streamUrl: "https://d39g1vxj2ef6in.cloudfront.net/v1/manifest/3fec3e5cac39a52b2132f9c66c83dae043dc17d4/prod-rakuten-stitched/3dc9603b-ed0a-4d55-90ac-d21905c26883/3.m3u8"
  },
    { id: 10,
    name: "DISNEY",
    logo: DISNEYLogo,
    category: "Kids",
    streamUrl: "https://fl5.moveonjoy.com/DISNEY/tracks-v1a1/mono.ts.m3u8"
    },
    { id: 11,
    name: "SMITHSONIAN ",
    logo: DISCOVERYLogo,
    category: "Science",
    streamUrl: "https://fl3.moveonjoy.com/SMITHSONIAN_CHANNEL/tracks-v1a1/mono.ts.m3u8"
    },

     { id: 12,
    name: "DISNEYXD",
    logo: DISNEYXDLogo,
    category: "Kids",
    streamUrl: "https://fl3.moveonjoy.com/DISNEY_XD/tracks-v1a1/mono.ts.m3u8"
    },

     { id: 13,
    name: "TOONAMI",
    logo: CNLogo,
    category: "Kids",
    streamUrl: "http://api.toonamiaftermath.com:3000/pst/playlist.m3u8"
    },
     { id: 14,
    name: "GAME+",
    logo: GAMEPLUSLogo,
    category: "Sports",
    streamUrl: "https://a-cdn.klowdtv.com/live2/fntsy_720p/chunks.m3u8"
    }
];

export default channels;
