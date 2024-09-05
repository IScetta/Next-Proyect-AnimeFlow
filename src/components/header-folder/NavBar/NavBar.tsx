import NavBarDropdown from "../NavBarDropdown"

type  subTitleType={
    Anime: string[];
    Manga: string[];
    Industry: string[];
    Watch: string[];
    Help:string[]
}

export type NavBarKeys = keyof subTitleType;

const navBarTitle: NavBarKeys[] = ["Anime", "Manga", "Industry", "Watch", "Help"];

const navBarSubTitle:subTitleType = {
    "Anime": ["Anime Search","Top Anime", "Seasonal Anime", "Recommendations", "Reviews"],
    "Manga":["Manga Search", "Top Manga", "Recommendations", "Reviews" ],
    "Industry":["New", "People", "Featured Articles", "Characters","Companies" ],
    "Watch":["Anime Trailers"],
    "Help":["About","Support","FAQ"]
}


export default function NavBar (){

    return(
        <div className="flex flex-row justify-between items-center h-full">
            {navBarTitle.map((title:NavBarKeys,index:number)=>(
                <div key={index} className=""> 
                    <NavBarDropdown title={`${title}`} subTitle={navBarSubTitle[title]}/>
                </div>
            ))

            }
            
        </div>
    )
}