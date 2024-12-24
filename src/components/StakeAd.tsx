import Image from "next/image";
import Link from "next/link";

const StakeAd = () => {
    const link = process.env.STAKE_REFERRAL_LINK || "";

    return (
        <section className="bg-white text-dark border-2 border-black flex items-center justify-center">
            <div className="p-1 text-center md:text-left">
                <Link href={link} target="_blank">
                    <div className="hidden lg:block">
                        <Image 
                            src={"/images/stake/Stake-Banners-970x90.jpg"} 
                            width={970} 
                            height={90} 
                            alt="Stake Banner" 
                            priority={true}
                        />
                    </div>
                    <div className="hidden md:block lg:hidden">
                        <Image 
                            src={"/images/stake/Stake-Banners-728x90.jpg"} 
                            width={728} 
                            height={90} 
                            alt="Stake Banner" 
                            priority={true}
                        />
                    </div>
                    <div className="block md:hidden">
                        <Image 
                            src={"/images/stake/Stake-Banners-468x90.jpg"} 
                            width={468} 
                            height={90} 
                            alt="Stake Banner" 
                            priority={true}
                        />
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default StakeAd;