export default async (request, context) => {
  const url = new URL(request.url);

  const name = url.searchParams.get("name") || "gmail";
  const encodedName = encodeURIComponent(name);

  const country = context.geo?.country?.code;

  if (country === "FR") {
    return Response.redirect(
      ` https://www.onthatass-deals.com/Q2S9MT/93BZXZ/?sub1=${encodedName}`,
      302
    );
  }

  if (country === "DE") {
    return Response.redirect(
      `https://www.onthatass-deals.com/Q2S9MT/GLTXCZ/?sub1=${encodedName}`,
      302
    );
  }

  return new Response("Offer not available in your country", {
    status: 200,
  });
};
