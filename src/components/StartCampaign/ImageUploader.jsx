import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { Button } from "semantic-ui-react";

const ImageUploader = () => {
  const [profile, setProfile] = useState(null);

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setProfile(imageList);
  };

  const maxNumber = 1;

  return (
    <ImageUploading
      multiple
      value={profile}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => (
        <div
          className="upload__image-wrapper"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {profile === null && (
            <Button
              basic
              circular
              color="blue"
              style={isDragging ? { color: "red" } : { margin: "0 auto" }}
              onClick={onImageUpload}
              {...dragProps}
            >
              Select image
            </Button>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "0.5vh auto",
            }}
          >
            {imageList.map((image, index) => (
              <div style={{ position: "relative" }}>
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div
                    className="image-item__btn-wrapper"
                    style={{ display: "flex" }}
                  >
                    <Button
                      color="blue"
                      style={{ margin: "0.5vh auto" }}
                      basic
                      onClick={() => {
                        onImageRemove(index);
                        setProfile(null);
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUploader;
