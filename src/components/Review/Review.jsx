import { Link } from "react-router-dom";

const Review = () => {
    return (
       <Link to="/review">
        <div className="text-center text-bold border-2 w-[700px] mx-auto space-y-3 h-[300px] p-5">








<p>1.The Silent Echo by Emma Thompson
An engaging mystery with unexpected twists. Couldn put it down!
</p>
<p>2.
Whispers of Time by James Anderson
A beautifully woven tale of love and destiny.</p>
<p>3.Beyond the Stars by Luna Garcia
An epic space adventure with breathtaking imagination.
</p>
<p>4.Echoes of the Past by Robert Stone
A haunting historical fiction that stays with you long after.
</p>
<p>5.The Art of Deception by Maya Patel
An intricate thriller full of deception and intrigue.</p>
<p>6.Whispers in the Wind by Hiroshi Tanaka
A poetic journey of self-discovery and reflection.</p>
</div>
</Link>
    );
};

export default Review;