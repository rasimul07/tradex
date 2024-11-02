'use client'
import React, { useState } from 'react'
import SubmitButton from '../form/SubmitButton';
import FormInput from '../form/FormInput';
import { filesUpload } from '@/utils/actions';
import FormContainer from '../form/FormContainer';

function DocUploadSection({ courseId }: { courseId: string }) {
  const [passportPreview, setPassportPreview] = useState<string | null>(null);
  const [bankStatementPreview, setBankStatementPreview] = useState<
    string | null
  >(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [signaturePreview, setSignaturePreview] = useState<string | null>(null);
  // const [videoPreview, setVideoPreview] = useState<string | null>(null);
  return (
    <div className="mb-6">
      <h3 className="text-xl text-blue-600 mb-6 mt-5 font-bold">
        Upload Your Essential Documents (KYC)
      </h3>
      <FormContainer action={filesUpload} className="space-y-6">
        {/* Passport / Aadhaar Upload */}
        <input type="hidden" name="courseId" value={courseId}></input>
        <FormInput
          label="Passport / Aadhaar Card"
          description="Upload a clear copy of your Passport or Aadhaar Card(Max size 300kb). Accept (.jpg, .jpeg, .png, .pdf). "
          filePreview={passportPreview}
          setPreview={setPassportPreview}
          accept=".jpg, .jpeg, .png, .pdf"
          name="identity"
        />

        {/* Bank Statement Upload */}
        <FormInput
          label="Bank Statement (Valid)"
          description="Upload a clear copy of your Bank Statement (Address Proof)(Max size 300kb). Accept (.jpg, .jpeg, .png, .pdf). "
          filePreview={bankStatementPreview}
          setPreview={setBankStatementPreview}
          accept=".jpg, .jpeg, .png, .pdf"
          name="bankStatement"
        />

        {/* Photo Upload */}
        <FormInput
          label="Photo"
          description="Upload a clear copy of your Passport-size Colour Photo (Max size 100kb).  Accept (.jpg, .jpeg, .png)."
          filePreview={photoPreview}
          setPreview={setPhotoPreview}
          accept=".jpg, .jpeg, .png"
          name="photo"
        />

        {/* Signature Upload */}
        <FormInput
          label="Signature"
          description="Upload a clear copy of your Signature(Max size 100kb).  Accept (.jpg, .jpeg, .png). "
          filePreview={signaturePreview}
          setPreview={setSignaturePreview}
          accept=".jpg, .jpeg, .png"
          name="signature"
        />
        <SubmitButton />
        {/* Video Upload */}
        {/* <FormInput
          label="self Video"
          description="Upload a a video.  Accept (.mp4)"
          filePreview={videoPreview}
          setPreview={setVideoPreview}
          accept=".mp4"
          name='self-video'
        /> */}
      </FormContainer>
    </div>
  );
}

export default DocUploadSection