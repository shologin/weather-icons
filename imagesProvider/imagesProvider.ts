export const imagesProvider = (url: string) => {
  // get the number of icon
  const iconNumber = url.split("/").slice(-1)[0].split(".")[0];

  // get string "day" or "night"
  const style = url.split("/").slice(-2)[0];

  // styles for day icons
  if (style === "day") {
    switch (iconNumber) {
      case "113":
        return "https://github.com/shologin/weather-icons/assets/136815194/fad8061b-c93b-4eca-8219-5326407d8b59";
      case "116":
        return "https://github.com/shologin/weather-icons/assets/136815194/d9232053-10ad-4d42-8543-557804eda49d";
      case "119":
        return "https://github.com/shologin/weather-icons/assets/136815194/2762b597-3d41-4d82-99e4-ad8d18b7fed8";
      case "122":
        return "https://github.com/shologin/weather-icons/assets/136815194/d9d2b5de-6c2b-4415-8d32-395b3749541d";
      case "143":
        return "https://github.com/shologin/weather-icons/assets/136815194/ff1e2fa7-bd31-466c-bafa-ae5c3ed66682";
      case "176":
        return "https://github.com/shologin/weather-icons/assets/136815194/90427f53-7bd8-4b84-9ccf-6eb1cd879c44";
      case "179":
        return "https://github.com/shologin/weather-icons/assets/136815194/80b0d719-6499-41a4-84bb-724902ac3dca";
      case "182":
        return "https://github.com/shologin/weather-icons/assets/136815194/0842b2df-b100-4452-b460-400b6b943712";
      case "185":
        return "https://github.com/shologin/weather-icons/assets/136815194/e3437a05-142d-48cc-8ecd-442adc33d07d";
      case "200":
        return "https://github.com/shologin/weather-icons/assets/136815194/b4d57824-17c7-405c-8dc7-914d1585f3d6";
      case "227":
        return "https://github.com/shologin/weather-icons/assets/136815194/104e159c-c84a-4db9-aac5-fa2bdce3e13b";
      case "230":
        return "https://github.com/shologin/weather-icons/assets/136815194/bb25e2a9-b1bc-426f-a2af-7ba6fc1b0892";
      case "248":
        return "https://github.com/shologin/weather-icons/assets/136815194/e1a2ae2e-f52f-4e0a-8fef-b8ec9eaba977";
      case "260":
        return "https://github.com/shologin/weather-icons/assets/136815194/f603e49c-9c25-4a07-af42-750449747b84";
      case "263":
        return "https://github.com/shologin/weather-icons/assets/136815194/3832bd6b-fbc2-451f-b1bf-e7ad4596291f";
      case "266":
        return "https://github.com/shologin/weather-icons/assets/136815194/8b92299d-8d70-468e-9ded-50ee812def30";
      case "281":
        return "https://github.com/shologin/weather-icons/assets/136815194/e4071a69-42c4-4b68-923f-c6d026f8572b";
      case "284":
        return "https://github.com/shologin/weather-icons/assets/136815194/7a9c82fe-4630-4307-9a93-0abf459e9811";
      case "293":
        return "https://github.com/shologin/weather-icons/assets/136815194/577026fc-a3a3-40f3-a53d-b3e9d3295b08";
      case "296":
        return "https://github.com/shologin/weather-icons/assets/136815194/45b1e98d-9ca9-40e6-9bdf-f4a55cd6b7fb";
      case "299":
        return "https://github.com/shologin/weather-icons/assets/136815194/40dd654d-767e-4c05-ae49-06d67256dada";
      case "302":
        return "https://github.com/shologin/weather-icons/assets/136815194/23202053-4777-4729-b170-604dd4a20a5e";
      case "305":
        return "https://github.com/shologin/weather-icons/assets/136815194/a59b3b60-cd9e-480d-8c86-6ff345b75847";
      case "308":
        return "https://github.com/shologin/weather-icons/assets/136815194/66dd0214-97f6-4dd1-a750-65eebc202adf";
      case "311":
        return "https://github.com/shologin/weather-icons/assets/136815194/ef609e75-269a-4546-8ed7-4fa4864b217d";
      case "314":
        return "https://github.com/shologin/weather-icons/assets/136815194/f55c9578-fb99-4123-b5db-4bacbdc208a9";
      case "317":
        return "https://github.com/shologin/weather-icons/assets/136815194/33fdb656-83cb-450e-a88a-6b6eadbab99d";
      case "320":
        return "https://github.com/shologin/weather-icons/assets/136815194/244a2e99-1d60-4563-984b-ffc8471ae7d3";
      case "323":
        return "https://github.com/shologin/weather-icons/assets/136815194/f369e022-dfe1-40be-9126-32c4f79a62db";
      case "326":
        return "https://github.com/shologin/weather-icons/assets/136815194/58b88630-beb9-4729-b4c1-cbbb66a37ce2";
      case "329":
        return "https://github.com/shologin/weather-icons/assets/136815194/a2430dbe-5a9f-4517-91b6-9a2b807a4a57";
      case "332":
        return "https://github.com/shologin/weather-icons/assets/136815194/e3c4aa49-896f-44e2-8f11-f266f874b694";
      case "335":
        return "https://github.com/shologin/weather-icons/assets/136815194/6ab51ac1-f392-45fb-b91e-db967a7a24cc";
      case "338":
        return "https://github.com/shologin/weather-icons/assets/136815194/a11ddf78-6514-4ac2-82ce-be7ecccf0b79";
      case "350":
        return "https://github.com/shologin/weather-icons/assets/136815194/706460ba-774b-4e24-a016-e160270ce730";
      case "353":
        return "https://github.com/shologin/weather-icons/assets/136815194/5984d9ae-61fb-4c26-91b1-6e14f2c82238";
      case "356":
        return "https://github.com/shologin/weather-icons/assets/136815194/d6c4ff83-7d8a-4f90-9bbe-7f88fdb965cd";
      case "359":
        return "https://github.com/shologin/weather-icons/assets/136815194/0470c8c8-dd0e-4c27-a23b-bbfd542da68e";
      case "362":
        return "https://github.com/shologin/weather-icons/assets/136815194/800c50b0-5723-40a3-939b-0f1914ba0cba";
      case "365":
        return "https://github.com/shologin/weather-icons/assets/136815194/6955da33-cac6-4b11-8a95-476cca3c67c5";
      case "368":
        return "https://github.com/shologin/weather-icons/assets/136815194/012ae395-a43a-45bf-8149-3159daead1b2";
      case "371":
        return "https://github.com/shologin/weather-icons/assets/136815194/afa571d1-4e20-4b6c-868d-8cf07e14e222";
      case "374":
        return "https://github.com/shologin/weather-icons/assets/136815194/9a86a53f-ae36-45be-aa56-7600548f925e";
      case "377":
        return "https://github.com/shologin/weather-icons/assets/136815194/d31d6445-7bb1-49e6-bd06-b2d87a87c62d";
      case "386":
        return "https://github.com/shologin/weather-icons/assets/136815194/59b099ed-f893-4cbc-a9b1-429fde4e08b6";
      case "389":
        return "https://github.com/shologin/weather-icons/assets/136815194/317721ab-7c36-42f1-bd3f-ac3146b1d6f3";
      case "392":
        return "https://github.com/shologin/weather-icons/assets/136815194/6a9590f4-c3b0-43cb-a0d7-ec4860e20c82";
      case "395":
        return "https://github.com/shologin/weather-icons/assets/136815194/4519e149-c361-40ef-9d1e-b6f049cf3250";
      default:
        console.error("ImagesProvider: Error with getting image");
        return url;
    }
  }
  // styles for night icons
  else if (style === "night") {
    switch (iconNumber) {
      case "113":
        return "https://github.com/shologin/weather-icons/assets/136815194/6dd5a8a5-f40c-4c33-8071-b6eff99bb4fc";
      case "116":
        return "https://github.com/shologin/weather-icons/assets/136815194/432e1ffb-6b1d-45ec-9310-dcf074451c0c";
      case "119":
        return "https://github.com/shologin/weather-icons/assets/136815194/c4bcfde9-b812-4f9e-9e14-25c6cdbadb6c";
      case "122":
        return "https://github.com/shologin/weather-icons/assets/136815194/72742095-32e5-4bd3-b1ff-da06fb9eca00";
      case "143":
        return "https://github.com/shologin/weather-icons/assets/136815194/937d6c59-420d-4ae2-9c39-fccaa2e09617";
      case "176":
        return "https://github.com/shologin/weather-icons/assets/136815194/14722dfd-47a7-44ab-bb23-70684bad6241";
      case "179":
        return "https://github.com/shologin/weather-icons/assets/136815194/f7cebd9d-135e-4424-b1f4-9ca3967a8d78";
      case "182":
        return "https://github.com/shologin/weather-icons/assets/136815194/f7c1d97b-f30c-4994-af2e-fa39112a43ca";
      case "185":
        return "https://github.com/shologin/weather-icons/assets/136815194/b69c678c-1ac7-4e4a-8890-cea31db50538";
      case "200":
        return "https://github.com/shologin/weather-icons/assets/136815194/ce085c25-4848-4990-8c2f-0e2a9b9c1702";
      case "227":
        return "https://github.com/shologin/weather-icons/assets/136815194/ad5c9b88-920e-4152-8e9c-ab677bd745af";
      case "230":
        return "https://github.com/shologin/weather-icons/assets/136815194/3c7462f7-c005-4766-97aa-a7f049e77fa0";
      case "248":
        return "https://github.com/shologin/weather-icons/assets/136815194/13e5fb9b-d388-43fa-b2d2-47b1e3c53835";
      case "260":
        return "https://github.com/shologin/weather-icons/assets/136815194/5ac613d6-e079-465f-97df-4a32bd1257e8";
      case "263":
        return "https://github.com/shologin/weather-icons/assets/136815194/bbf41bda-b8c1-4b54-b5ad-f5141e711a2e";
      case "266":
        return "https://github.com/shologin/weather-icons/assets/136815194/16d23efc-c251-4c1f-9f19-1c58767c6e9d";
      case "281":
        return "https://github.com/shologin/weather-icons/assets/136815194/a2eafd91-280f-45d6-9bab-2fd3125ae175";
      case "284":
        return "https://github.com/shologin/weather-icons/assets/136815194/b0937163-8524-4353-a953-33f50533e003";
      case "293":
        return "https://github.com/shologin/weather-icons/assets/136815194/0bcec230-5b4a-4577-928d-bd732d4cf377";
      case "296":
        return "https://github.com/shologin/weather-icons/assets/136815194/267d257c-bfe6-4ae5-a4bd-8ae6cdc87dd4";
      case "299":
        return "https://github.com/shologin/weather-icons/assets/136815194/7d359aaa-6e73-4574-9832-d03ccf76acf7";
      case "302":
        return "https://github.com/shologin/weather-icons/assets/136815194/a0556199-1289-45a8-8c9c-3847393a37d1";
      case "305":
        return "https://github.com/shologin/weather-icons/assets/136815194/a7657efd-1ad3-4f0d-a851-9b3269debfd6";
      case "308":
        return "https://github.com/shologin/weather-icons/assets/136815194/350dfd26-9fea-40e6-b1b9-87561a1b3737";
      case "311":
        return "https://github.com/shologin/weather-icons/assets/136815194/efbdadaf-bade-4aa8-aca2-4aeabc0a42bf";
      case "314":
        return "https://github.com/shologin/weather-icons/assets/136815194/353e5624-ba37-44ff-912a-5e2bfb919905";
      case "317":
        return "https://github.com/shologin/weather-icons/assets/136815194/5019f982-bf23-4b7e-9ab1-edd85fdb526a";
      case "320":
        return "https://github.com/shologin/weather-icons/assets/136815194/600b4620-5572-48f8-b3c3-2eb08afc6abc";
      case "323":
        return "https://github.com/shologin/weather-icons/assets/136815194/7987a936-4700-4a3a-abfc-3941d0ac4494";
      case "326":
        return "https://github.com/shologin/weather-icons/assets/136815194/b956ecef-6406-409f-ab64-8b8b7a387913";
      case "329":
        return "https://github.com/shologin/weather-icons/assets/136815194/8416e0cc-e45c-424a-851b-b00717b3fd52";
      case "332":
        return "https://github.com/shologin/weather-icons/assets/136815194/769fa791-3b38-4019-9229-e0d6502671ad";
      case "335":
        return "https://github.com/shologin/weather-icons/assets/136815194/c9f952af-661a-45b0-92a2-66dfbcb7f103";
      case "338":
        return "https://github.com/shologin/weather-icons/assets/136815194/930c3974-cf0f-4c38-a2d7-3f814f1b8cd0";
      case "350":
        return "https://github.com/shologin/weather-icons/assets/136815194/1d620f9a-1d1e-4aa4-a709-353184d55633";
      case "353":
        return "https://github.com/shologin/weather-icons/assets/136815194/1bdcb0eb-93a0-4543-9a83-9417d9c1cb34";
      case "356":
        return "https://github.com/shologin/weather-icons/assets/136815194/7ab235bc-c485-44d2-8875-29bc9658f77d";
      case "359":
        return "https://github.com/shologin/weather-icons/assets/136815194/9399ba53-dfd2-443d-9f3c-47a10588ca60";
      case "362":
        return "https://github.com/shologin/weather-icons/assets/136815194/6ef615b0-683f-4c36-b949-671d1a22b79b";
      case "365":
        return "https://github.com/shologin/weather-icons/assets/136815194/95853775-4599-4671-a6e3-47e4a01f87fa";
      case "368":
        return "https://github.com/shologin/weather-icons/assets/136815194/4c89878e-d2ad-4e52-a2a4-eaaab6a71e25";
      case "371":
        return "https://github.com/shologin/weather-icons/assets/136815194/ac1814f4-104f-410d-978c-40f11754d2be";
      case "374":
        return "https://github.com/shologin/weather-icons/assets/136815194/e58d760a-0273-4d34-b8fd-73a85bcfcf65";
      case "377":
        return "https://github.com/shologin/weather-icons/assets/136815194/3c753332-1dfc-40ad-8e3a-7c753c8b66f9";
      case "386":
        return "https://github.com/shologin/weather-icons/assets/136815194/f63544e7-64c0-411b-bd52-a2ca6bb3b0d5";
      case "389":
        return "https://github.com/shologin/weather-icons/assets/136815194/4867383e-bcab-4a4b-a1d3-49f40ed6526f";
      case "392":
        return "https://github.com/shologin/weather-icons/assets/136815194/4d131018-4bfd-4133-97ee-acf3f8bea851";
      case "395":
        return "https://github.com/shologin/weather-icons/assets/136815194/136ec5c2-601a-4f28-bb99-70bc9541ef49";
      default:
        console.error("ImagesProvider: Error with getting image");
        return url;
    }
  } else {
    console.error("ImagesProvider: General error");
    return url;
  }
};
