import React, { useState } from "react";
import LabelInput from "./LabelInput";
import Heading from "./Heading";
import Button from "./Button";
import RadioButton from "./RadioButton";
import cardLogo from "../assests/Netflix_logo.png";
import Label from "./Label";

function StepOne() {
  const [first, setfirst] = useState(true);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  return (
    <>
      {first && (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="border bg-white border-gray-200 h-24 h-auto w-2/5 p-8 shadow-lg">
            <div className="flex flex-row justify-between mb-6">
              <Heading
                FWeight="font-normal"
                FSize="text-xl"
                LHieght="leading-7"
                label="Create a job"
              />
              <Heading
                FWeight="font-medium"
                FSize="text-base"
                LHieght="leading-6"
                label="Step 1"
              />
            </div>

            <LabelInput
              widthFull="w-full"
              placeholder="ex. UX UI Designer"
              FWeight="font-medium"
              FSize="text-sm"
              label="Job title"
              isRequired
            />

            <LabelInput
              widthFull="w-full"
              placeholder="ex. Google"
              FWeight="font-medium"
              FSize="text-sm"
              label="Company name"
              isRequired
            />

            <LabelInput
              widthFull="w-full"
              placeholder="ex. Information Technology "
              FWeight="font-medium"
              FSize="text-sm"
              label="Industry"
              isRequired
            />

            <div className="flex flex-row justify-between">
              <LabelInput
                widthFull="w-auto "
                placeholder="ex. Chennai"
                FWeight="font-medium"
                FSize="text-sm"
                label="Location"
              />
              <LabelInput
                widthFull="w-auto "
                placeholder="ex. In-office"
                FWeight="font-medium"
                FSize="text-sm"
                label="Remote type"
              />
            </div>

            <div className="flex justify-end">
              <Button
                label={"Next"}
                bgprimary="bg-blue-500"
                textprimary="text-blue-500"
                borderprimary="border-blue-500"
                bgsecondary="bg-zinc-900"
                FWeight="font-medium"
                FSize="text-base"
                onClick={() => {
                  setfirst(false);
                  setsecond(true);
                  setthird(false);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {second && (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="border bg-white border-gray-200 h-24 h-auto w-2/5 p-8 shadow-lg">
            <div className="flex flex-row justify-between mb-6">
              <Heading
                FWeight="font-normal"
                FSize="text-xl"
                LHieght="leading-7"
                label="Create a job"
              />
              <Heading
                FWeight="font-medium"
                FSize="text-base"
                LHieght="leading-6"
                label="Step 2"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="space-y-3">
                <LabelInput
                  widthFull="w-auto"
                  placeholder="Minimum"
                  FWeight="font-medium"
                  FSize="text-sm"
                  label="Experience"
                />
              </div>
              <div className="mt-5">
                <LabelInput
                  widthFull="w-auto"
                  placeholder="Maximum"
                  FWeight="font-medium"
                  FSize="text-sm"
                />
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="space-y-3">
                <LabelInput
                  widthFull="w-auto"
                  placeholder="Minimum"
                  FWeight="font-medium"
                  FSize="text-sm"
                  label="Salary"
                />
              </div>
              <div className="mt-5">
                <LabelInput
                  widthFull="w-auto"
                  placeholder="Maximum"
                  FWeight="font-medium"
                  FSize="text-sm"
                />
              </div>
            </div>

            <LabelInput
              widthFull="w-full"
              placeholder="ex. 100"
              FWeight="font-medium"
              FSize="text-sm"
              label="Total employee"
            />

            <div className="flex flex-row gap-5">
              <div className="mt-1">
                <RadioButton
                  label="Apply type"
                  inputLabel="Quick apply"
                  FWeight="font-medium"
                  FSize="text-sm"
                  RfwEIGHT="font-normal"
                  RfSize="text-sm"
                  radioName="name1"
                />
              </div>
              <div className="mt-6">
                <RadioButton
                  inputLabel="External apply"
                  RfwEIGHT="font-normal"
                  RfSize="text-sm"
                  radioName="name1"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                label={"Save"}
                bgprimary="bg-blue-500"
                textprimary="text-blue-500"
                borderprimary="border-blue-500"
                bgsecondary="bg-zinc-900"
                FWeight="font-medium"
                FSize="text-base"
                onClick={() => {
                  setfirst(false);
                  setsecond(false);
                  setthird(true);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {third && (
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex w-1/2 h-auto m-0 p-5 border border-gray-200  rounded-lg bg-white shadow-xl">
              <div className="flex-shrink-0">
                <img className="w-12 h-12" src={cardLogo} alt="Logo" />
              </div>
              <div className="ml-6 pt-1 flex flex-col gap-6">
                <div>
                  <Label
                    Fweight="font-normal"
                    Fsize="text-2xl"
                    lHeight="leading-8"
                    label="UX UI Designer"
                    textColor="text-black"
                  />

                  <Label
                    Fweight="font-normal"
                    Fsize="text-base"
                    lHeight="leading-6"
                    label="Great Vibes - Information Technology"
                    textColor="text-black"
                  />

                  <Label
                    Fweight="font-normal"
                    Fsize="text-base"
                    lHeight="leading-6"
                    label="Chennai, Tamilnadu, India (In-office)"
                    textColor="text-gray-500"
                  />
                </div>

                <div>
                  <Label
                    className="pt-8"
                    Fweight="font-normal"
                    Fsize="text-base"
                    lHeight="leading-6"
                    label="Part-Time (9.00 am - 5.00 pm IST)"
                    textColor="text-gray-800"
                  />

                  <Label
                    className="pt-8"
                    Fweight="font-normal"
                    Fsize="text-base"
                    lHeight="leading-6"
                    label="Experience (1 - 2 years)"
                    textColor="text-gray-800"
                  />

                  <Label
                    className="pt-8"
                    Fweight="font-normal"
                    Fsize="text-base"
                    lHeight="leading-6"
                    label="INR (₹) 30,000 - 50,000 / Month"
                    textColor="text-gray-800"
                  />

                  <Label
                    className="pt-8"
                    Fweight="font-normal"
                    Fsize="text-base"
                    lHeight="leading-6"
                    label="51-200 employees"
                    textColor="text-gray-800"
                  />
                </div>

                <div>
                  <Button
                    label={"Apply Now"}
                    bgprimary="bg-blue-500"
                    textprimary="text-blue-500"
                    borderprimary="border-blue-500"
                    bgsecondary="bg-zinc-900"
                    FWeight="font-medium"
                    FSize="text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default StepOne;
