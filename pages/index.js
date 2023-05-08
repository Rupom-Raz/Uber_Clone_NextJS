import Link from "next/link";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
export default function Home() {
    return (
        <Wrapper>
            <Map />
            <ActionItems>
                {/* Header */}

                <Header>
                    <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
                    <Link href="/profile">
                        <Profile>
                            <Name>Rupom Raz</Name>
                            <UserImage src="https://captiontools.com/wp-content/uploads/2017/03/testy3-1.png" />
                        </Profile>
                    </Link>
                </Header>

                {/* ActionsButtons */}
                <ActionsButtons>
                    <ActionsButton>
                        <Link href="/search">
                            <ActionBtnImg src="https://i.ibb.co/cyvcpfF/uberx.png" />
                            Ride
                        </Link>
                    </ActionsButton>
                    <ActionsButton>
                        <Link href="/search">
                            <ActionBtnImg src="https://i.ibb.co/n776JLm/bike.png" />
                            Wheels
                        </Link>
                    </ActionsButton>
                    <ActionsButton>
                        <Link href="/search">
                            <ActionBtnImg src="https://i.ibb.co/5RjchBg/uberschedule.png" />
                            Reserve
                        </Link>
                    </ActionsButton>
                </ActionsButtons>

                {/* InputField */}

                <InputButton>Where To ?</InputButton>
            </ActionItems>
        </Wrapper>
    );
}
const Wrapper = tw.div`
flex flex-col bg-white  h-screen text-black

`;

const ActionItems = tw.div`
flex-1 p-4
`;
const Header = tw.div`
flex justify-between items-center
`;
const UberLogo = tw.img`
h-28

`;
const Profile = tw.div`
flex items-center

`;
const Name = tw.div`
font-medium mr-4


`;
const UserImage = tw.img`
w-12 h-12 rounded-full border-gray-500 p-px

`;
const ActionsButtons = tw.div`
flex

`;
const ActionsButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-22 items-center flex-col font-medium justify-center  rounded-lg transform hover:scale-105 trasition
`;
const ActionBtnImg = tw.img`
h-3/5

`;
const InputButton = tw.div`
h-20 bg-gray-200 text-xl p-4 m-1 flex items-center mt-4
`;
