import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1693711836001-99859bb7185a?q=80&w=957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
     const HOT_URL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAACBQEGBwj/xAAxEAACAgEDAwMDAgYCAwAAAAABAgADEQQSIQUxQRMiYTJRcRSBBhUjQpHwobFTYtH/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAIBEAAgICAwEAAwAAAAAAAAAAAAECEQMhBBIxQRNRcf/aAAwDAQACEQMRAD8A9oW2n3EfgnEKAGXIx+0MVSzuM/adSutTkDE+T6nu3oGvqLyO0uGPnvC4Hic2x0SDxzmXA4lgsvt4jURWDxOgS+2DsbaMRtUMtjAzBOSeR3kD7uJ33Nwsm7GAI3HCnDRBdY1V9tVzHNfOW8TUZggLMcZ8zz/WqqeqUOmQmpBxx5+ZUY2NbFOs9eWm4rawdCMYU9hMrStRfqa7asPW3nxj5mE+hv32es7qitszjOTHdLq9Po1WhiWUnkATq6KtM0SpH0DT7Kkr3N47Q9uoq2D5nndDrRqtILMgbR2zCPqxcyLnKZ5+DMHFohoe1SLbZuTlgdy/iJWau2u7+qUrpVck5wMf7/1HL7a6K99eCpX3E/8AM8d/EfWUusNW0ZViGYdscS4Q7C8OfxB/EFpdU0bHK8YBzuE8vrhdqtWpcM7DwO4E0RZp6ir2DdZt4J5iFfUbqr2sTAZmJY45yTO6Ea8Ey/6Ctywa2xCvOCAQc9pt9M6VUtTPddXUMAKX579jj/ExLOoG6yx2GDgYnP1VupJLWf28AfEGpMRvMP5SQLb0YE4DqO/+8S4/iJLNM9NKk2+d3HMyun6HV9QrCatc6dSSGc4I8cTU6X0rTaP1dTrFXaowD4xM2olEXqTbRvRS2OTgSRS/XdMFrbK1K54w0kVID6+OZYjiDWsBsiXZTt9uM/M8/wCEIqv1QuOJylTj3YJ+4hdsqKtA2UAlgssAfE7sB/M0USWwFjkDAx+8CyFvqc4PiMtUD3z+04BtOCAR95m4u9jUhVtIABtyBnkiHrRFXgD8y1hUHBbExepdUSnULTR/UbftbnGJPhSdms+wDJxx5M8LrDe3VrQH212HsG5I+09No9bbVYadTUfcCylfPxFn0q7zqMqiugLZHZvj/fEfYqKozdf0LUavTBtLfWeOFxjHnv5nkNX0fqS3Mp0uSDztOf8AifTtPqUroAHPGfz8zl+DYtye3dz25PE1x5HEbkfLqbdXpQy1owKctkEAZ55jXTeqOtrC88D35+Z7XX0aTqOmuAGLH9pIPA/MwU/hNQtrVags4H0EY/zOlTjJbQhEdV1OqVKUAzawXtkDP3iXV+kaurXLpsK2V3WFFzNvotP8trF95Wu7fyCOw+0Dr9S9+pb2KHZeCWyCuYR90FHlnos/ULWoZz9IA5iV2i1FV/pXUujd8FZqXX216p1TGAdvtHeN6WrUNqRqb1LKUwmTkCb9qFR58aa41G5UJQHBzK6Bam1S+spKdzg4nvdN09L9AKvSZfUbc2cTyXXunHp3UWqG0rnKlft9v2hHL20IZ0fVK001lNS+mQNoJMHqOrPdof0ChmVh7rc9zMwutZBIyTIthNykIPjbH03YWaum6YnoJ6jjdjmSVT1LFDbHGf8A1kk0Fn22oZGYTtLpWB2nTXPOUGjNyOKYVRmCGAcGGrQjnxNYImTLBZRuIfHtPOIrbUy2hgWK4mk00iE9lWac3YHfEGWCtjIyTCMvE5u17NaBOEPOOfvM3qFWmKl2xvzlcnELcfTtzuYZJAz5mZ1W9BVYthONvBA5XPkTK7ZrFDGg1A1OnKlgLVJUNx3EBZqK1ZdNaoAZioLY5PcxbTXU6Tpims7TjJHYjzE9dbT1JK1J3OHzu3YI+JSjsuj0l+orFy0D6dvjEmkZ101jWAlTnGB4nl1Y/qyCxSo4Ckf2gDmeh6Z1GkaZeCcEqf8A7N+lIUo0B1uiF9FmSqFjlMDBJ+fvMzR616rXruqC2jiwnkk/E1tTdWbgVHtwTkGZPVLK6Q1ieRn8mCexxQHqtdTadiBtYj3HPgTxtWn1Os1i6fcSXPBbjiek0daOpv1gfYD2+Jn6vU/p7BZpqfTDZxu5InRj0U0D09ej0d9lO8Wsp5Ldz+JU62xaCWP9NSQo7fiZV+SzWOTu8tAWXFgMEma9G/TNujf/AJ89VIr3dlGBn6TPNazUNqdS9jtuZmzmDdiTzBMZcYKJNkugN21gRkH4l35EGRNaJD/q7/8AyN/mSLYnIUB+mUbnHb4hCeO2ZLF21nA5nEoNmN/GOcTz1GSdGDaO1gM2CMRtUGOJWqrye4jCpnmdWLEzGcwJTMHZ9OMZjvp8cxa+h3BNRAz2J7CXkxuvCYzVmF1H1KENlQ3EHLL4Ig9VqwmiNwHLKDye32mpfob3rK71DZyTPP67p12i0/pPaGUjG0dh+J5k8coWztxzjLRk6/qFmrqKvhcYIPkGI23PZkWHjtjE0hoW2kjsO8Uekc/eTGjezN1LFkFa8KPEY6XohcjsHIYdgPE5ZT3jvTf1FG70K8+TlZp/C4gdRofSRQLAc5z8mIo1qU+ko/uzuI5E2TrN6kWVe/PiZ95FJLYJLfeNW9Cs0OgqbbmptALheQfMz+uPXp2sAQm3O3nsPtiL6fXtpbDapPbBAiGu1T6y/wBRsAYwBNIYndgLvq7gu0sSCeRFXte1sM5x4zCXjmLzrpCoXsHLc5wYraI3YIvYuRGiZIUPeUIhiuDBsI0ZgiJUrCGVOD3lBRTEkKAskAo/SNVha4rtyPvDgrW5wwyeeZ5oa96lBVywPJ+86+vturBrDbxxj7zyYcivhnLDbPVI62EYcA/EdqGEHmeW0mpZbawVIfPuBOOJvUdR09lgqUtnOAccGejxc8ZXbpnLnxOPg4wyMSKgXIAyJ31UGAWGYLc7MyMDhuxE73XpzJMyuobjaWrsBGSMfYzItFtp/qEnE320bnjBI+5gLenlRvJzieVm48pNs7sWSKVHn7KfjEtpKExzWC4POQCf2j9tW1sxe4ZOc4nG4uJ0qVmfdo2vtdqlKtnsBjOe87d097AAoK4TGRnx2hLLbF7MT8iWHUigYDg+ARFHbLTZ5i9bF3cH7E/MRv8AUIGc/vPSay5L6yLa/eTkEcYmftqOEK8fZj5m6kWmefdT5gtvM09ZVtIDDDD48RNlxN4uzRCViwDLiOuIrZNEhNirjmAcRiyAfsZaJFH+qCYwtn1GCMaMGUlGhDBtLA5JOSQA+wou7kZxHNMu1vHaJ0ZwAZp6Ze08brbLkx3T1gkEjI8zT01CscKu0ZiWlryp/M29HVzOzjYbfhy5p9UHp04BGYztAOBOgY4nZ7CSSpHnN27OTli7kIlpICMnU6baZmX1YJnor09uZj6lOTPO5WJLw7cORtbMW+uI2LgmauoXvM24cmeclTO1CFvEQvbEfuTOZn3195rGjRCFr8xZ3jNtXMXeudMfChaxuIpYY7ZVFbExLQCbmBbsY06xa0cGUiWxNz7jBmFxxKkSkZMEZQwhlD3jEDMk7JAD7NQO00tMORMnTmamnP0zylGmVI19J3m5pO37Tz+lfbzNnSXcftPV40o1RxZ4t7NESSqHIzLTtOIkkk4YAUu+iY+p+ozR1dnGJj6izkzh5UtUdeBCWp8/mZ1vcxzUPnMzb2nlfTvj4BuiFwjFrHxEL3aaxRaYC6Kv3lrXbMWsdp0xNLOWRS3vCO58wFlmJaJbAPwTE7jD3WZizHMszbAtKNCNBtGiAZlCJfzKmMAck7JAD6/QZo0twJkUNwI/Q88tlNGxp2zNOi7aBMKqzbzGqr+ZUMriyJQs9DVqR5jSXq08/XfxDLqJ3Q5dLZyywJ+G6bVAgLdQApxMw6n2wD35lS5irRMeP+xnUajdM66zOZW26KWWzz8mVyZ1Rgl4VveIXNDW2ZzEL3mcUapUDsaJ3HMvZZFLbMzaOikBuidhwYax+YtY2ZvFmgGxopZzGnPEVs7yzOSFnEC0YeBeWjMAYN4VoJpYFJQmXMqRGAOSWxJAD6nQY7W+JmI+IZbZ5b2a1RqJZmN1WYmPXbGktkSTIezTFsKt0yvWhUuidh1NM3e2Da6JNbgSvrZiQqD228RdrYOy2K2Wy0gCXWcROx85ksszFbHlpF0ct93EStBHaMF8mUc5E0WhOzOsJB5i7tHrlzELlxNoUwTaBM0A7QjQLzWgc7Bs0CzQjiAYQIKsYNpY95UywKzhnTOGAFZJ2SAHv1shlfiLIuBI1u0Ti6luVseWyMJZxMyh/MZFuBJrYxv1eYzVbxMY25cfmPJZwJM0JMbstwv7yotzFL7JSq3iJIbGLbIE2Zg7beIobcPKSEHsfmLvZLk5XMVsODLS2VFpMjvK+vjiULQFnM2/HoUn9Du2eYraYM2YOJRrMiJQaYRaYOyBcy7tAlpqiWijQbS7GDaWR4DYShEIZUiAAiJwy5lDGBySckgB7zOBFL7c2bZW3UYUiKVvlsznS0VFbNOp8CFNuFMTR8LKW2cSFE0caGEt9w/M0kt4EwUfLTQqvwmIShYkM6i2Cqti112R+8EtnMSgNj7W8RR7PfO78rF7G7wjHY2tWPV2ZWUsbiJ0344hnbdzG4mIB32tmQnIzBXn/uDSznE3g9Ay7xWz2nMYLZEBZzLYkwTNmCadfgymYUXZwmVJnTKGFCZDKzuZzMCSrQZhGgzGBWSSSAjce0u2DCI2JJJm/DfF6GV+IN3kkiRWXwiN7oyG9skkGTEpY3EorcySRIl+hg3EC7cySRfTX4DL4Mur8SSSpGP0q7ZEVY4aSSKI5Fw3EozTsk1MgDmBPeSSCA5mVMkkZSKGSSSAFSZUySQJKySSQA//2Q==";
     const COLD_URL="https://media.istockphoto.com/id/1289449088/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.webp?b=1&s=170667a&w=0&k=20&c=KmUu3hmpzMt22rs0DgfbOtQNbCM0NvycsaOsXGIv8qk=";
     const RAIN_URL="https://plus.unsplash.com/premium_photo-1666726664307-707a74015ca4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?RAIN_URL : info.temp>15 ? HOT_URL:COLD_URL}
                        title="weather image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}°C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}°C</p>
                            <p>Max Temp = {info.tempMax}°C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}°C</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}
