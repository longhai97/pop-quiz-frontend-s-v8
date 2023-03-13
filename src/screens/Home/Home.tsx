import * as React from "react";
import { FlatList } from "react-native";
import { MainView } from "../../components/MainView/MainView";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../@types/navigation";
import { Product } from "../../components";

type Props = NativeStackScreenProps<AuthStackParamList, "Home">
type IProduct = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
};

const Home: React.FC<Props> = ({  }) => {

  return (
    <MainView>
      <FlatList
        data={ProductData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Product item={item} />}
        numColumns={2}
      />
    </MainView>
  );
};

export default Home;

const ProductData: IProduct[] = [
  {
    id: 1,
    image: "https://api.lorem.space/image/furniture?w=180&h=200",
    title: "Bye Bye, Love",
    description: "Stress fracture, left hand, initial encounter for fracture",
    price: "$63.72"
  },
  {
    id: 2,
    image: "https://api.lorem.space/image/furniture?w=180&h=204",
    title: "Hansel & Gretel: Witch Hunters",
    description: "Nondisplaced fracture of anterior wall of right acetabulum",
    price: "$48.15"
  },
  {
    id: 3,
    image: "https://api.lorem.space/image/furniture?w=210&h=200",
    title: "Wadd: The Life & Times of John C. Holmes",
    description: "Disorders of bilateral acoustic nerves",
    price: "$83.20"
  },
  {
    id: 4,
    image: "https://api.lorem.space/image/furniture?w=190&h=210",
    title: "Lemon Chronicles",
    description: "Disorders of bilateral acoustic nerves",
    price: "$30.91"
  },
  {
    id: 5,
    image: "https://api.lorem.space/image/furniture?w=202&h=200",
    title: "Day of the Beast, The (Día de la Bestia, El)",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$35.80"
  },
  {
    id: 6,
    image: "https://api.lorem.space/image/furniture?w=200&h=220",
    title: "Sabotage",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$27.69"
  },
  {
    id: 7,
    image: "https://api.lorem.space/image/furniture?w=240&h=200",
    title: "Tin Drum, The (Blechtrommel, Die)",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$15.34"
  },
  {
    id: 8,
    image: "https://api.lorem.space/image/furniture?w=230&h=200",
    title: "Ghost Breakers, The",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$43.77"
  },
  {
    id: 9,
    image: "https://api.lorem.space/image/furniture?w=200&h=204",
    title: "Orchestra Wives",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$93.35"
  },
  {
    id: 10,
    image: "https://api.lorem.space/image/furniture?w=200&h=209",
    title: "Me Without You",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$26.60"
  },
  {
    id: 11,
    image: "https://api.lorem.space/image/furniture?w=200&h=207",
    title: "Old Fashioned Way, The",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$93.66"
  },
  {
    id: 12,
    image: "https://api.lorem.space/image/furniture?w=204&h=200",
    title: "Lust for Gold (Duhul aurului)",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$82.80"
  },
  {
    id: 13,
    image: "https://api.lorem.space/image/furniture?w=209&h=200",
    title: "Broken Embraces (Los abrazos rotos)",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$6.53"
  },
  {
    id: 14,
    image: "https://api.lorem.space/image/furniture?w=203&h=200",
    title: "Alice Adams",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$98.48"
  },
  {
    id: 15,
    image: "https://api.lorem.space/image/furniture?w=205&h=200",
    title: "When the Game Stands Tall",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$81.69"
  },
  {
    id: 16,
    image: "https://api.lorem.space/image/furniture?w=210&h=200",
    title: "I Hate Christian Laettner",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$68.93"
  },
  {
    id: 17,
    image: "https://api.lorem.space/image/furniture?w=206&h=200",
    title: "Anything Else",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$12.35"
  },
  {
    id: 18,
    image: "https://api.lorem.space/image/furniture?w=195&h=190",
    title: "Little Richard",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$29.44"
  },
  {
    id: 19,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Knight and Day",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$83.04"
  },
  {
    id: 20,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Black Pirate, The",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$65.33"
  },
  {
    id: 21,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Tamara Drewe",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$46.21"
  },
  {
    id: 22,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Night and the City",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$32.93"
  },
  {
    id: 23,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "The Circle",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$69.35"
  },
  {
    id: 24,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Young Guns",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$6.10"
  },
  {
    id: 25,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Road House",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$27.77"
  },
  {
    id: 26,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Consuming Spirits",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$31.10"
  },
  {
    id: 27,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Bloody Pit of Horror (Il boia scarlatto) (Virgins for the Hangman)",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$50.86"
  },
  {
    id: 28,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Song of the Thin Man",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$13.64"
  },
  {
    id: 29,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Thunderball",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$67.23"
  },
  {
    id: 30,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Kabei: Our Mother (Kâbê)",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$64.39"
  },
  {
    id: 31,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Patton Oswalt: Werewolves and Lollipops",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$92.27"
  },
  {
    id: 32,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Godson, The",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$8.10"
  },
  {
    id: 33,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Narc",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$11.75"
  },
  {
    id: 34,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "C(r)ook (Basta - Rotwein Oder Totsein)",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$36.42"
  },
  {
    id: 35,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Positively True Adventures",
    description: "Dislocation of distal end of unspecified ulna",
    price: "$85.15"
  },
  {
    id: 36,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Dirty Deeds",
    description: "Disorders of bilateral acoustic nerves",
    price: "$59.21"
  },
  {
    id: 37,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Odds Against Tomorrow",
    description: "Disorders of bilateral acoustic nerves",
    price: "$30.04"
  },
  {
    id: 38,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Out of Mind: The Stories of H.P. Lovecraft",
    description: "Disorders of bilateral acoustic nerves",
    price: "$29.34"
  },
  {
    id: 39,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Elvis Meets Nixon",
    description: "Disorders of bilateral acoustic nerves",
    price: "$93.69"
  },
  {
    id: 40,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "No Name on the Bullet",
    description: "Disorders of bilateral acoustic nerves",
    price: "$91.68"
  },
  {
    id: 41,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Dedication",
    description: "Disorders of bilateral acoustic nerves",
    price: "$67.29"
  },
  {
    id: 42,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Adventures of Mary-Kate and Ashley",
    description: "Disorders of bilateral acoustic nerves",
    price: "$45.36"
  },
  {
    id: 43,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "My Love Has Been Burning (Waga koi wa moenu)",
    description: "Disorders of acoustic nerves",
    price: "$50.17"
  },
  {
    id: 44,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    description: "Disorders of bilateral acoustic nerves",
    title: "Easter Parade",
    price: "$43.60"
  },
  {
    id: 45,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    description: "Disorders of bilateral acoustic nerves",
    title: "DiG!",
    price: "$29.86"
  },
  {
    id: 46,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Black Snake Moan",
    description: "Disorders of bilateral acoustic nerves",
    price: "$95.75"
  },
  {
    id: 47,
    image: "https://api.lorem.space/image/furniture?w=200&h=200",
    title: "Whistle Blower, The",
    description: "Disorders of bilateral acoustic nerves",
    price: "$64.06"
  },
  {
    id: 48,
    image: "https://api.lorem.space/image/furniture?w=200&h=203",
    title: "Big Fat Liar",
    description: "Disorders of bilateral acoustic nerves",
    price: "$72.21"
  },
  {
    id: 49,
    image: "https://api.lorem.space/image/furniture?w=200&h=202",
    title: "Cannibal! The Musical (a.k.a. Alferd Packer: The Musical)",
    description: "Disorders of bilateral acoustic nerves",
    price: "$28.34"
  },
  {
    id: 50,
    image: "https://api.lorem.space/image/furniture?w=200&h=201",
    title: "Anger Management",
    description: "Disorders of bilateral acoustic nerves",
    price: "$36.74"
  }
];

