import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface ReviewProps
{
    id: number,
    name: string,
    job_title: string,
    rating: number,
    content: string
};
export default function Review(props: ReviewProps)
{
    return (
        <div className="bg-white border shadow-md rounded-lg p-4 text-center">
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-xl text-primary font-semibold">{props.name}</h3>
                <p className="text-gray-500 italic">{props.job_title}</p>
            </div>

            <div className="mt-4" role="img" aria-label={`${props.rating} stele`}>
            {
                [...Array(props.rating)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="text-xl text-yellow-400" />
                ))
            }
            </div>

            <p className="mt-4">{props.content}</p>
        </div>
    );
}