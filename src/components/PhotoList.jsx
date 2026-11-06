import Photo from './Photo';

//Shows heading and list of photo components
// Receives the photos array and page title in params as props from APP
function PhotoList({ photos, title }) {
  return (
    <div className="photo-container">
      <h2>{title}</h2>
      <ul>
        {/* each photo gets unique id */}
        {photos.map(photo => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </ul>
    </div>
  );
}

export default PhotoList;