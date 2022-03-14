import React, {useState} from 'react'
import nearbyapi from '../API/neabyapi'

const Nearby = () => {
    
    
    const [nearbyData, setNearbyData] = useState(nearbyapi);
    console.log(nearbyData)    
    return(
        <div>
                            
                                <div class="container title-container">
                                <h1 className="main-heading text-center fw-bolder">
                                            Nearby Places
                                            </h1> 
{
nearbyData.filter((id,index)=>id=1).map((curElem)=>{
    const {id,image, title, info} = curElem;
    return (
        
    <div class="nearby-grid">
		<figure class="nearby-effect">
			<img src={image} alt="img16" />
			<figCaption>
            <h2>{title}</h2>
				<hr color="white" noshade />
				<div class="btn-container">
				 <button type="submit" class="btn5 btn" id="narnia">{info}</button>
			    </div>
                
            </figCaption>	
		</figure>
	</div>
    )
    }
    )
} 
</div>
</div> 
            )
    }
export default Nearby
