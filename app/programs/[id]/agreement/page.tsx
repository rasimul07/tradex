import AgreementInfo from "@/components/agreement/AgreementInfo";
import DocUploadSection from "@/components/agreement/DocUploadSection";
import Footer from "@/components/Footer";
import React from "react";

const AgreementPage = async({ params }: { params: { id: string } }) => {
  const {id} = await params;
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
        <AgreementInfo courseId={id} />
        <DocUploadSection courseId={id} />
        <Footer />
      </div>
    </div>
  );
};

export default AgreementPage;
