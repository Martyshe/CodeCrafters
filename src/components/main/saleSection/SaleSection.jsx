import React from "react";
import s from './SaleSection.module.css'

export default function SaleSection() {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2>Sale</h2>
        <button>All sales</button>
      </div>
      <div className={s.cardsContainer}>
        <div>
          <img src="https://s3-alpha-sig.figma.com/img/0f7a/ae93/bb2db36d7db944d0547f2e7463ae3e5d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NQ3d~a1fmH3GdHE9fQnetzqswa7Zn13U6I~yvUeE5wLaKSqqrkPOXXr8wGoxGwyQvcQRhHwAl8vXyENZNOW5ILHZwUCwvCVX1~q6Ux0NnY0wsfvABSDR-0lFZbOrYEukOymLzQIUMltYxNN3fr1V9Zdlf~1gLJ6gWa3cKdFE8kdhVbUB5lmkqHWaickELWzcJUJBElwmJkEJ-7NlNjcvEmKXQYmShS4wO8geYGjl-0U1KxC00i2ay4dB8Tln6gR-MQ5LNo3BxzXNgRE3QhdesRGRJZIBdyzp2diWbP7T018HaRKPW8jvINzQlAaoXlLfzuAqDPkbVe4NXf4HxuOVLA__" alt=""></img>
          <p className={s.itemName}>Decorative forged bridge</p>
          <p className={s.actualPrice}>$500 <span className={s.oldPrice}>$1000</span></p>
        </div>
        <div>
          <img src="https://s3-alpha-sig.figma.com/img/547f/341a/45760c1eaeef4e5c9e9b132785316704?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bo5Eg3WplApkm~wrlgBekNDeX-Nnii7I2xUPtZNPRPHBAwtTOfDNu5ZbiSfOAatRLdgRzVBXi1TDhuBr2OGDcZYAukCTbC3orppguXuozhLMEGZCtLGT5tuGq-322Q9Q50WvLlA5PhoEtHjBchOzjJ-fa5hPl-Hwx0DwY6n6zIIti9vXKvqBQsRcNXmuQrhtLTvodCkxK7oFBP7gMJTBRnb2mVYhqvRhKtvwFFuMfQ8uJg7wCaFNLbh59YOuYCQBPTQiInh~PJV-Z4WPirZmxotEFvuiatbEqtUZpT12tvqaQutcjfYBA3zr2K1qMUsFlvKmoT~dr2IoyhoVihg9og__" alt=""></img>
          <p className={s.itemName}>Flower basket</p>
          <p className={s.actualPrice}>$500 <span className={s.oldPrice}>$1000</span></p>
        </div>
        <div>
          <img src="https://s3-alpha-sig.figma.com/img/88c1/aac2/80993c97ab8616e2d2bc5bcf9e1dc755?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kG3yZFa4XCHdPDam90~Ov5tO6H~ajC3Jdpp4zMHV9Z6oKKZkw2UWQBt32Ja-c7RhO5zQJfZIsR4gW0LrINFMUgKO5XAXCiMwwhIrq0jOT0hOiqvOz7PK-lcGkEctOC6Ird14L-4oJidtC45G8xPa7Gf3t86l3ckMrLBrP1rDQJkW2maacj4yMCPGzuA0M9My46ECAWRjTtIOsRmEamKO9AScecBzf5rZKkEAuzdm6S2VfJT~Z~Tqds4tnkFLLousCoGF7BUXED9zHolfnE2-lfqor2796owhmaXR8Qr~rNAaYS3Nhog38AHDeVVVL7~UkmcqyhL9pz74CfiLRuOxkg__" alt=""></img>
          <p className={s.itemName}>Aquarium lock</p>
          <p className={s.actualPrice}>$500 <span className={s.oldPrice}>$1000</span></p>
        </div>
        <div>
          <img src="https://s3-alpha-sig.figma.com/img/09b8/da44/86105b0f828b602186d5277766ace5d9?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pfKtu2MsMpoevTlNqXYQUpY6LijN8L9RPP8EetdGtvumU3CIeG4-LagLkIYqO4eWVsTlYDrx8sVF1RJtej9u3Eq6S4GgyNWTIzfex1ozfhGfFODyT3Lh3T2C6MQqcryDZVANVtmuKHtT20kaQj3CXceE9XuNJyLGS4TSkBLJMF7dnRWMTg5fSThBW8BkYk8mF8xF8etbgdIdsdhiEQY7Z0SJuRdGXzMZwcNA1U53BtDgVPBi6Xbsfs6LtN6Wb2uJEjXUKjmWISXwEFcAerqwWjLfqzv-~YsYDMfRItJyeh-LXynvZGO2YA5b2TzyIcGyVUziABRDC4KFCCBH45nhdQ__" alt=""></img>
          <p className={s.itemName}>Secateurs</p>
          <p className={s.actualPrice}>$500 <span className={s.oldPrice}>$1000</span></p>
        </div>
      </div>
    </div>
  );
}


