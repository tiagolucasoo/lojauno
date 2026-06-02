import './css/descriptionProduct.css';

function DescriptionProduct({description}) {
  return (
    <div className="DescriptionProduct">
      <main className="DescriptionProduct-main">
        <p>{description}</p>
      </main>
    </div>
  );
}

export default DescriptionProduct;
