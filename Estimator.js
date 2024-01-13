import React, { useState, useEffect } from 'react';
import './Estimator.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Estimator = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [totalSquareFeet, setTotalSquareFeet] = useState(getRandomSquareFeet());
  const [showInput, setShowInput] = useState(false);

  const [result, setResult] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    setTotalSquareFeet(getRandomSquareFeet());
    setShowInput(false); 
  }, []);

  function getRandomSquareFeet() {
    return Math.floor(Math.random() * 7000) + 2;
  }

  const estimateCost = () => {
    setError(null); // Clear previous errors

    if (isNaN(totalSquareFeet) || totalSquareFeet <= 0) {
      setResult('Please enter a valid positive number for Total Square Feet.');
      return;
    }

    if (imageUrl) {
      processImage(imageUrl, parseFloat(totalSquareFeet))
        .then((constructionDetails) => {
          displayImageFromUrl(imageUrl);
          const costEstimation = calculateCost(constructionDetails);
          displayCosts(costEstimation);
        })
        .catch((error) => {
          setError(`Error: ${error.message}`);
        });
    } else {
      setResult('Please provide an image URL.');
    }
  };
 

  const processImage = (url, squareFeet) => {
    return new Promise((resolve, reject) => {
      const constructionDetails = {
        totalArea: squareFeet,
        cementCostPerSqFt: 90,
        brickCostPerUnit: 5,
        steelCostPerKg: 70,
        sandCostPerCubicFt: 20,
        woodCostPerCubicFt: 43,

      };

      resolve(constructionDetails);
    });
  };

  const displayImageFromUrl = (url) => {
    setUploadedImage(url);
  };

  const calculateCost = (constructionDetails) => {
    const {
      totalArea,
      cementCostPerSqFt,
      brickCostPerUnit,
      steelCostPerKg,
      sandCostPerCubicFt,
      woodCostPerCubicFt,
   
    } = constructionDetails;

    const cementCost = totalArea * cementCostPerSqFt;
    const brickCost = totalArea * brickCostPerUnit;
    const steelCost = totalArea * steelCostPerKg;
    const sandCost = totalArea * sandCostPerCubicFt;
    const woodCost = totalArea * woodCostPerCubicFt;
   
    const totalCost = cementCost + brickCost + steelCost + sandCost + woodCost;

    return {
      cementCost,
      brickCost,
      steelCost,
      sandCost,
      woodCost,
      totalCost,
    };
  };

  const displayCosts = (costEstimation) => {
    setResult(
      `
        Estimated Cement Cost: Rs: ${costEstimation.cementCost}<br>
        Estimated Brick Cost: Rs: ${costEstimation.brickCost}<br>
        Estimated Steel Cost: Rs: ${costEstimation.steelCost}<br>
        Estimated Sand Cost: Rs: ${costEstimation.sandCost}<br>
        Estimated Wood Cost: Rs: ${costEstimation.woodCost}<br>
        Total Estimated Cost: Rs: ${costEstimation.totalCost}
      `
    );
  };

  return (
    <>
      <h1 style={{ color: '#f5f7ff', fontSize: '2rem' ,display: 'flex', flexDirection: 'column',alignItems: 'center', }}>HS CONSTRUCTIONS</h1>
      
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="construction-form">
            <label htmlFor="imageUrlInput" className="form-label">
              Image URL:
            </label>
            <input
              type="text"
              id="imageUrlInput"
              className="form-control"
              placeholder="Enter Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <br />
  
            <div className={showInput ? 'show' : 'hide'}>
              <label htmlFor="squareFeetInput" className="form-label">
                Total Square Feet:
              </label>
              <input
                type="number"
                id="squareFeetInput"
                className="form-control"
                placeholder="Enter Total Square Feet"
                value={totalSquareFeet}
                onChange={(e) => setTotalSquareFeet(e.target.value)}
              />
              <br />
            </div>
  
            <button className="btn btn-primary" onClick={estimateCost}>
              Estimate Cost
            </button>
          </div>
  
          <div dangerouslySetInnerHTML={{ __html: result }}></div>
  
          {uploadedImage && (
            <img
              id="uploadedImage"
              src={uploadedImage}
              alt="Uploaded Construction Image"
              className="uploaded-image"
              style={{
                maxWidth: '300px',
                maxHeight: '300px',
                marginTop: '10px',
              }}
            />
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Estimator;