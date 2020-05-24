import React from 'react';
import { useForm } from 'react-hook-form';
import { formDataType, iForm } from '../../types';

const ProfileForm: React.FC<iForm> = (props) => {
  const { updateParentState, handleBackClick } = props;
  const { handleSubmit, register, errors } = useForm<formDataType>();
  const onSubmit = (data: formDataType) => {
    console.log('profile form submitted');
    updateParentState(data);
  };

  return (
    <>
      <form id="HelpCategories" className="FindHelp_form" onSubmit={handleSubmit(onSubmit)}>
        <legend>Create a profile:</legend>
        <label className="FindHelp_flex_label">
          Avatar
          <input type="text" name="avatar" ref={register} placeholder={'http://youravatar'} />
        </label>
        <label className="FindHelp_flex_label">
          Share Your Story
          <textarea name="story" ref={register} />
        </label>
        <label className="FindHelp_flex_label">
          Your Neighborhood
          <select name="neighborhood" ref={register}>
            <option value="Grantville">Grantville</option>
          </select>
        </label>
      </form>
      <div className="FindHelp_form_nav">
        {handleBackClick && (
          <button className="grey_bg_color light_text_color bold" onClick={handleBackClick}>
            &lt; Back
          </button>
        )}
        <button className="primary_bg_color light_text_color bold" form="HelpCategories" type="submit">
          Next
        </button>
      </div>
    </>
  );
};

export default ProfileForm;
